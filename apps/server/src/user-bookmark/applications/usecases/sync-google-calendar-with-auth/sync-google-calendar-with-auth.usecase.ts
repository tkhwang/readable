import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { oauthGoogleCredentials } from '@readable/common/constants';
import { CommonOutput } from '@readable/common/models/common.output';
import { UserAuthTokenRefreshTokenNotFoundException } from '@readable/user-bookmark/domain/errors/user-bookmark.error';
import { OAuthUserNotFoundExcepiton } from '@readable/users/domain/errors/oauthUser.error';
import { User } from '@readable/users/domain/models/user.model';
import { OAuthUsersRepository } from '@readable/users/infrastructures/typeorm/repositories/oauthUsers.repository';
import { google } from 'googleapis';
import {
  SyncGoogleCalendarWithAuthInput,
  SyncGoogleCalendarWithAuthUrlInfo,
} from './sync-google-calendar-with-auth.input';
import { format } from 'date-fns';
import * as moment from 'moment-timezone';

export class SyncGoogleCalendaerWithAuthUsecase implements Usecase<SyncGoogleCalendarWithAuthInput, CommonOutput> {
  constructor(@InjectRepository(OAuthUsersRepository) private readonly oAuthUsersRepository: OAuthUsersRepository) {}

  async execute(command: SyncGoogleCalendarWithAuthInput, requestUser: User) {
    const { urlInfo } = command;
    const { timezone = 'Asia/Seoul' } = requestUser;

    const token = await this.getUserTokens(requestUser);

    const { client_secret, client_id, redirect_uris } = oauthGoogleCredentials;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);
    oAuth2Client.setCredentials(token);

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
    const resource = this.generateResource(urlInfo, timezone);

    calendar.events.insert(
      {
        auth: oAuth2Client,
        calendarId: 'primary',
        requestBody: resource,
      },
      (err, event) => {
        if (err) {
          console.log('[-] SyncGoogleCalendaerWithAuthUsecase failed: ', err);
          return new CommonOutput(false);
        }
        console.log(event.data);
        return new CommonOutput(true);
      }
    );

    return new CommonOutput(true);
  }

  private async getUserTokens(requestUser: User) {
    const oauthUser = await this.oAuthUsersRepository.findOne({ where: { user: requestUser } });
    if (!oauthUser) throw new OAuthUserNotFoundExcepiton(requestUser.id);

    const { accessToken, refreshToken } = oauthUser;

    if (!(accessToken && refreshToken))
      throw new UserAuthTokenRefreshTokenNotFoundException(requestUser.id, oauthUser?.id);

    return { access_token: accessToken, refresh_token: refreshToken };
  }

  private generateResource(urlInfo: SyncGoogleCalendarWithAuthUrlInfo, timezone: string) {
    return {
      start: {
        date: format(moment().tz(timezone).toDate(), 'yyyy-MM-dd'),
        timeZone: timezone,
      },
      end: {
        date: format(moment().tz(timezone).toDate(), 'yyyy-MM-dd'),
        timeZone: timezone,
      },
      summary: `[🙉 readable] ${urlInfo.title}`,
      status: 'confirmed',
      description: urlInfo.url,
    };
  }
}
