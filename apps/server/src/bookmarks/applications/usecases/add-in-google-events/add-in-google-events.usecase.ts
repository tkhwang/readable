import { Usecase } from '@readable/common/usecase';
import { AddInGoogleEventsInput } from './add-in-google-events.input';
import { google } from 'googleapis';
import { calendar } from 'googleapis/build/src/apis/calendar';
import { User } from '@readable/users/domain/models/user.model';
import { googleCalendarServiceCredentials } from '@readable/common/constants';

export class AddBookmarkInGoogleEventsUsecase implements Usecase<AddInGoogleEventsInput, any> {
  async execute(command: AddInGoogleEventsInput, requestUser: User) {
    const { bookmarks } = command;

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
        dateTime: bookmark.scheduledAt!.toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: bookmark.scheduledAt!.toISOString(),
        timeZone: 'UTC',
      },
      summary: `Readable`,
      status: 'confirmed',
      description: `Readable`,
    }));

    for (const resource of resources) {
      calendar.events.insert(
        {
          auth,
          calendarId: 'primary',
          requestBody: resource,
        },
        (err, event) => {
          if (err) console.log('[-] Error: ', err);
          console.log(event.data);
        }
      );
    }
  }
}
