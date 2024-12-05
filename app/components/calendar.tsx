"use client";

import { useState } from "react";
import { Calendar as ShadCalendar } from "@/components/ui/calendar";

function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <ShadCalendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

export default Calendar;
