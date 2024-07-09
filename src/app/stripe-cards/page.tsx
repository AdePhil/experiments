"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type CardProps = {
  data: {
    id: string;
    color: string;
    image_name: string;
  };
  i: number;
  total: number;
};
const Card = ({ data, i, total }: CardProps) => {
  return (
    <div className="h-[217px] w-[351px] rounded-[20px] mt-[80px] inset-0  relative">
      <div
        className="absolute inset-2 z-[-1] rounded-[14px] "
        style={{
          boxShadow:
            "0 50px 100px -20px rgba(50,50,93,0.25), 0 30px 60px -30px rgba(0,0,0,0.3)",
        }}
      ></div>
      <Image
        src={`/stripe-cards/chip.png`}
        alt={"card-pin"}
        width={50}
        height={50}
        className="block absolute top-[calc(50%-25px)] left-[30px]"
      />
      <Image
        src={`/stripe-cards/${data.image_name}`}
        alt={"card"}
        width={351}
        height={217}
        className="block"
      />
    </div>
  );
};

const sampleCards = [
  {
    id: "1",
    color: "bg-black",
    image_name: "card1.svg",
    new: false,
  },
  {
    id: "2",
    color: "bg-orange-200",
    image_name: "card2.svg",
    new: false,
  },
  {
    id: "3",
    color: "bg-slate-400",
    image_name: "card3.svg",
    new: true,
  },
];

const StripCards = () => {
  const [cards, setCards] = useState(sampleCards);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCards((cards) => {
  //       let [first, ...rest] = cards;
  //       const newCards = rest.map((c) => ({ ...c, id: crypto.randomUUID() }));
  //       return [...newCards, { ...first, id: crypto.randomUUID() }];
  //     });
  //   }, 3000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const handleClick = () => {
    let [first, ...rest] = cards;
    const newCards = rest.map((c) => ({
      ...c,
      id: crypto.randomUUID(),
      new: false,
    }));
    setCards([...newCards, { ...first, id: crypto.randomUUID(), new: true }]);
  };

  return (
    <div className=" h-full bg-[#F7F9FC] text-black">
      <div className="max-w-[600px] min-h-screen w-full mx-auto ">
        <h1 className="pt-10 text-center text-2xl">Strip Cards</h1>
        <div className="flex justify-center mt-10 mb-[100px]">
          <button
            onClick={handleClick}
            className="flex h-[48px] rounded-[8px] p-[1.4rem] border   border-slate-300 justify-center items-center  hover:bg-zinc-100 transition-all duration-300 ease-in-out"
          >
            Animate
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="flex justify-center items-center relative h-[376px]   w-[350px] rounded-[14px]"
            style={{
              perspective: "1200px",
            }}
          >
            <AnimatePresence initial={true}>
              {cards.map((card, i) => {
                return (
                  <motion.div
                    initial={{
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      y: 80,
                      opacity: 1,
                    }}
                    exit={{
                      rotateX: i === 0 ? -100 : 0,
                      scale: i === 0 ? 0.95 : 1,
                      zIndex: i === 0 ? 100 : cards.length - i + 1,
                      opacity: 0,
                      transition: {
                        ease: "easeInOut",
                        duration: 0.8,
                      },
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.6,
                      // delay: 0.1,
                    }}
                    key={card.id}
                    style={{
                      zIndex: cards.length - i + 1,
                      top: `${-i * 80}px`,
                      transformOrigin: "center bottom",
                      transformBox: "fill-box",
                    }}
                    className={`absolute`}
                  >
                    <Card data={card} i={i} total={cards.length} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripCards;
