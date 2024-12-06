"use client";

import Calendar from "./calendar";
import Event from "./event";
import { EventType } from "../page";

function Scheduler({ events }: { events: EventType[] }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Calendar />
      {events?.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Scheduler;
