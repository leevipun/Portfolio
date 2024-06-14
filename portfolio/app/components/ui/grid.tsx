import { FaStar } from "react-icons/fa6";
import { BentoGrid, BentoGridItem } from "./bentogrid";

const gridItems = [
  {
    id: 1,
    title: "Client Collaboration",
    description: "Ensuring open communication with clients.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Technical Expertise",
    description: "Proficient in web development.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast",
    description: "Passionate about development and technology.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Project Collaboration",
    description: "Looking forward to new project opportunities.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];



const renderStars = (stars: number) => {
  const filledStars = Array.from({ length: stars }, (_, i) => (
    <FaStar key={i} color='yellow' />
  ));
  const emptyStars = Array.from({ length: 5 - stars }, (_, i) => (
    <FaStar key={i + stars} color='gray' />
  ));
  return (
    <>
      {filledStars}
      {emptyStars}
    </>
  );
};

  

export default function Grid() {
    return (
        <section id="about">
        <BentoGrid className="w-full py-20">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </section>
    )
}