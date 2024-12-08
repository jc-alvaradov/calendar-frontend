import Scheduler from "@/components/ui/scheduler";
import Instagram from "@/components/ui/instagram";
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

  return (
    <main>
      <Scheduler events={events} />
      <Instagram />
    </main>
  );
}
