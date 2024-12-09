import { Scheduler, Instagram } from "@/components/features";
import { EventType } from "@/types/event";
import { query } from "./service";

export default async function Home() {
  const events: EventType[] = await query();

  return (
    <main>
      <Scheduler events={events} />
      <Instagram />
    </main>
  );
}
