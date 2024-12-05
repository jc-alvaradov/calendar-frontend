import Image from "next/image";
import Scheduler from "./components/scheduler";
import { query } from "./service";

import imagen from "../public/assets/images/image01.jpg";
import imagen2 from "../public/assets/images/image02.jpg";
import imagen3 from "../public/assets/images/image03.jpeg";
import imagen4 from "../public/assets/images/image04.jpg";

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
      <h1>¡ BIENVENIDOS !</h1>
      <p>
        ONTONUTRICIÓN nace con el objetivo de promover una alimentación
        equilibrada y saludable mediante servicios de calidad e intervenciones
        personalizadas individuales, grupales y comunitarias.
      </p>
      <Scheduler events={events} />

      <div className="flex flex-col justify-center items-center">
        <h1>Sigueme en Instagram</h1>
        <div className="flex gap-4">
          <Image
            className=" rounded-lg"
            src={imagen}
            alt="food"
            width={200}
            height={300}
          />
          <Image
            className=" rounded-lg"
            src={imagen2}
            alt="food"
            width={200}
            height={300}
          />
          <Image
            className=" rounded-lg"
            src={imagen3}
            alt="food"
            width={200}
            height={300}
          />
          <Image
            className=" rounded-lg"
            src={imagen4}
            alt="food"
            width={200}
            height={300}
          />
        </div>
      </div>
    </main>
  );
}
