import { Usecase } from '@readable/common/usecase';
import { AddInGoogleEventsInput } from './add-in-google-events.input';
import { google } from 'googleapis';
import { User } from '@readable/users/domain/models/user.model';
import { googleCalendarServiceCredentials } from '@readable/common/constants';
import { CommonOutput } from '@readable/common/models/common.output';
import { format } from 'date-fns';
export class AddBookmarkInGoogleEventsUsecase implements Usecase<AddInGoogleEventsInput, CommonOutput> {
  async execute(command: AddInGoogleEventsInput, requestUser: User) {
    const { calendarId, bookmarks } = command;

    const client = new google.auth.GoogleAuth({
      keyFile: googleCalendarServiceCredentials,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const auth = new google.auth.JWT(
      googleCalendarServiceCredentials.client_email,
      '',
      googleCalendarServiceCredentials.private_key,
      'https://www.googleapis.com/auth/calendar'
    );

    const calendar = google.calendar({ version: 'v3', auth: client });

    const scheduledBookamrks = bookmarks.filter(bookmark => bookmark.scheduledAt);

    const resources = scheduledBookamrks.map(bookmark => ({
      start: {
        date: format(new Date(), 'yyyy-MM-dd'),
        timeZone: 'UTC',
      },
      end: {
        date: format(new Date(), 'yyyy-MM-dd'),
        timeZone: 'UTC',
      },
      summary: `[readable] ${bookmark.title}`,
      status: 'confirmed',
      description: bookmark.url,
    }));

    try {
      for (const resource of resources) {
        calendar.events.insert(
          {
            auth,
            calendarId,
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
