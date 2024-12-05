"use client";

import { Card, CardContent } from "@/components/ui/card";

import { EventType } from "../page";

function Event({ event }: { event: EventType }) {
  return (
    <Card key={event.id} className="bg-yellow shadow-none border-none">
      <CardContent className="grid gap-4">
        <h2 className="text-2xl font-bold">{event.summary}</h2>
        <p className="text-lg">{event.description}</p>
        <p className="text-sm">{event.start.dateTime}</p>
      </CardContent>
    </Card>
  );
}

export default Event;