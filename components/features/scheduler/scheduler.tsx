"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/shadcn";
import { Event } from "@/components/features";
import { EventType } from "@/types/event";

export function Scheduler({ events }: { events: EventType[] }) {
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
