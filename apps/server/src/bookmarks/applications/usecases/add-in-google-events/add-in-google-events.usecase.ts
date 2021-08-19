import { Usecase } from '@readable/common/usecase';
import { AddInGoogleEventsInput } from './add-in-google-events.input';
import { google } from 'googleapis';
import { User } from '@readable/users/domain/models/user.model';
import { oauthGoogleCredentials } from '@readable/common/constants';
import { CommonOutput } from '@readable/common/models/common.output';
import { format } from 'date-fns';
import { InjectRepository } from '@nestjs/typeorm';
import { OAuthUsersRepository } from '@readable/users/infrastructures/typeorm/repositories/oauthUsers.repository';
import * as moment from 'moment-timezone';

export class AddBookmarkInGoogleEventsUsecase implements Usecase<AddInGoogleEventsInput, CommonOutput> {
  constructor(@InjectRepository(OAuthUsersRepository) private readonly oAuthUsersRepository: OAuthUsersRepository) {}

  async execute(command: AddInGoogleEventsInput, requestUser: User) {
    const { bookmarks } = command;
    const { timezone = 'Asia/Seoul' } = requestUser;

    const oauthUser = await this.oAuthUsersRepository.findOne({ where: { user: requestUser } });
    if (!oauthUser) return new CommonOutput(false, `OAuthUser of User (${requestUser.id}) not found`);

    const { accessToken, refreshToken } = oauthUser;
    if (!(accessToken && refreshToken)) return new CommonOutput(false, 'accssToken and refreshToken are not found.');

    const token = { access_token: accessToken, refresh_token: refreshToken };

    const { client_secret, client_id, redirect_uris } = oauthGoogleCredentials;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);
    oAuth2Client.setCredentials(token);

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

    const scheduledBookamrks = bookmarks.filter(bookmark => bookmark.scheduledAt);

    const resources = scheduledBookamrks.map(bookmark => ({
      start: {
        date: format(moment().tz(timezone).toDate(), 'yyyy-MM-dd'),
        timeZone: timezone,
      },
      end: {
        date: format(moment().tz(timezone).toDate(), 'yyyy-MM-dd'),
        timeZone: timezone,
      },
      summary: `[readable] ${bookmark.title}`,
      status: 'confirmed',
      description: bookmark.url,
    }));

    try {
      for (const resource of resources) {
        calendar.events.insert(
          {
            auth: oAuth2Client,
            calendarId: 'primary',
            requestBody: resource,
          },
          (err, event) => {
            if (err) console.log('[-] Error: ', err);
            console.log(event.data);
          }
        );
      }

      return new CommonOutput(true);
    } catch (error) {
      return new CommonOutput(false);
    }
  }
}
