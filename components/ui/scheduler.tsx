"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import Event from "./event";
import { EventType } from "@/app/page";

function Scheduler({ events }: { events: EventType[] }) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex items-center justify-center gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      {events?.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Scheduler;
