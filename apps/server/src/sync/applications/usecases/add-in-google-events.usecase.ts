import { Usecase } from '@readable/common/usecase';
import { AddInGoogleEventsInput } from './add-in-google-events.input';
import { google } from 'googleapis';
import { googleCalendarServiceCredentials } from '@readable/common/applications/constant';
import { calendar } from 'googleapis/build/src/apis/calendar';

export class AddInGoogleEventsUsecase implements Usecase<AddInGoogleEventsInput, any> {
  async execute(command: AddInGoogleEventsInput) {
    const { calendarId, bookmarks } = command;
    const client = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth: client });

    const scheduledBookamrks = bookmarks.filter(bookmark => bookmark.scheduledAt);

    const resources = scheduledBookamrks.map(bookmark => {
      return {
        start: {
          dateTime: bookmark.scheduledAt!.toISOString(),
        },
        end: {
          dateTime: bookmark.scheduledAt!.toISOString(),
        },
        summary: `Readable : (${bookmark.siteName})${bookmark.title}`,
      };
    });

    for (const resource of resources) {
      // client.events.insert(
    }
  }
}
