import Scheduler from "./components/scheduler";
import Instagram from "./components/instagram";
import { query } from "./service";

export type EventType = {
  id: string;
  summary: string;
  description: string;
  start: {
    dateTime: string;
  };
};

export default async function Home() {
  const events: EventType[] = await query();

  console.log(events);

  return (
    <main>
      <Scheduler events={events} />
      <Instagram />
    </main>
  );
}
