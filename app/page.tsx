import Header from "./header";
import { query } from "./service";

type Event = {
  id: string;
  summary: string;
  description: string;
  start: {
    dateTime: string;
  };
};

export default async function Home() {
  const events: Event[] = await query();

  console.log(events);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main>
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col items-center justify-center p-8 m-8 bg-white rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold">{event.summary}</h2>
            <p className="text-lg">{event.description}</p>
            <p className="text-sm">{event.start.dateTime}</p>
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}
