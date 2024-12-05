import { google } from "googleapis";
import { JWT } from "google-auth-library";
import fs from "fs";
import path from "path";

export function createCredentialsFile() {
  const credentialsPath = path.join(process.cwd(), "credentials.json");

  if (!fs.existsSync(credentialsPath)) {
    const credentials = Buffer.from(
      process.env.GOOGLE_CREDENTIALS || "",
      "base64"
    ).toString();

    fs.writeFileSync(credentialsPath, credentials);
  }

  return credentialsPath;
}

export async function GET() {
  const credentialsPath = createCredentialsFile();
  const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));

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
