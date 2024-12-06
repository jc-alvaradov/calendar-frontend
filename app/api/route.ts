import { google } from "googleapis";
import { JWT } from "google-auth-library";

const getGCPCredentials = async () => {
  // for Vercel, use environment variables
  if (process.env.VERCEL) {
    return {
      client_email: process.env.GCP_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY,
    };
  }

  try {
    // for local development, use credentials.json
    const credentials = await import("../../credentials.json");

    return {
      client_email: credentials.default.client_email,
      private_key: credentials.default.private_key,
    };
  } catch (error) {
    console.error("Error getting GCP credentials", error);
    return {};
  }
};

export async function GET() {
  const credentials = await getGCPCredentials();
  const authClient = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: [
      "https://www.googleapis.com/auth/calendar",
      "https://www.googleapis.com/auth/calendar.readonly",
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/calendar.events.readonly",
    ],
  });

  const calendar = await google.calendar({
    version: "v3",
    auth: authClient,
  });

  // const event = {
  //   summary: 'Sample Event',
  //   start: {
  //     dateTime: '2024-12-04T10:00:00',
  //     timeZone: 'America/Los_Angeles',
  //   },
  //   end: {
  //     dateTime: '2024-12-04T11:00:00',
  //     timeZone: 'America/Los_Angeles',
  //   }
  // };

  // const response = await calendar.events.insert({
  //   calendarId: 'primary',
  //   resource: event,
  // });

  const res = await calendar.events.list({
    calendarId: process.env.CALENDAR_ID,
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: "startTime",
  });

  const events = res.data.items;

  console.log({ events });

  if (!events || events.length === 0) {
    console.log("No upcoming events found.");
    return Response.json({ message: "No upcoming events found." });
  }

  console.log("Upcoming 10 events:");

  events?.map((event) => {
    const start = event.start?.dateTime || event.start?.date;
    console.log(`${start} - ${event.summary}`);
  });

  return Response.json({ message: "Hello World", data: events });
}
