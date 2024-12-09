import Image from "next/image";

import imagen from "@/public/assets/images/image01.jpg";
import imagen2 from "@/public/assets/images/image02.jpg";
import imagen3 from "@/public/assets/images/image03.jpeg";
import imagen4 from "@/public/assets/images/image04.jpg";

export function Instagram() {
  return (
    <div className="flex flex-col justify-center items-center bg-lightyellow">
      <h1>Sigueme en Instagram</h1>
      <div className="flex gap-2">
        <Image
          className=" rounded-lg"
          src={imagen}
          alt="food"
          width={220}
          style={{ objectFit: "cover" }}
        />
        <Image
          className="rounded-lg"
          src={imagen2}
          alt="food"
          width={220}
          style={{ objectFit: "cover" }}
        />
        <Image
          className="rounded-lg"
          src={imagen3}
          alt="food"
          width={220}
          style={{ objectFit: "cover" }}
        />
        <Image
          className="rounded-lg"
          src={imagen4}
          alt="food"
          width={220}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default Instagram;
