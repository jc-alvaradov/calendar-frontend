import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@chakra-ui/react";

import Header from "./header";
import { getHome } from "./strapi";

const { STRAPI_HOST } = process.env;

const items = [
  { value: "first-item", title: "First Item", text: "Some value 1..." },
  { value: "second-item", title: "Second Item", text: "Some value 2..." },
  { value: "third-item", title: "Third Item", text: "Some value 3..." },
];

export default async function Home() {
  const { descripcion, userPhoto } = await getHome();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main>
        <img
          className="rounded-full w-64"
          src={`${STRAPI_HOST}${userPhoto.url}`}
          alt={userPhoto.alternativeText}
        ></img>
        <BlocksRenderer content={descripcion} />
        <AccordionRoot>
          {items.map((item, index) => (
            <AccordionItem key={index} value={item.value}>
              <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
              <AccordionItemContent>{item.text}</AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </main>
      <footer></footer>
    </div>
  );
}
