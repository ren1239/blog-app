"use client";

import { easeIn, easeInOut, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ImageTypes, squareData } from "../lib/squareData";
import { time } from "console";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1.5,
      type: "spring",
      easeInOut,
      duration: 3,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ShuffleHero = () => {
  return (
    <motion.section
      className="w-full px-8 py-2 md:py-12 grid grid-cols-1 
     md:grid-cols-2 items-center gap-2 md:gap-8 
     mx-auto font-raleway body-height bg-black"
    >
      <motion.div
        className=" items-center justify-center text-white 
      mx-auto w-full flex flex-col gap-y-4"
        variants={textContainer}
        initial="hidden"
        animate="show"
      >
        <motion.span
          className="block mb-4 text-xs md:text-sm text-primary font-medium"
          variants={item}
        >
          Step by step, day by day...
        </motion.span>
        <motion.h3 variants={textItem} className="text-6xl md:text-8xl  ">
          REN TAN
        </motion.h3>
        <span className="text-sm md:text-2xl font-noto_serif italic">
          Software Developer
        </span>
        <p className="text-sm text-center md:text-lg foreground text-gray-700 my-4 md:my-6 md:pt-8">
          Follow along as i record my journey from<span> </span>
          <span className="italic text-primary underline underline-offset-2">
            architect
          </span>{" "}
          to <br />
          <span className="italic text-primary underline underline-offset-2">
            software
          </span>
          <span> </span>
          developer.
        </p>
        <div className="">
          <Link href={"/main"}>
            <Button className="rounded-full">Watch Now</Button>
          </Link>
        </div>
      </motion.div>
      <ShuffleGrid />
    </motion.section>
  );
};

const shuffle = ({ array }: { array: ImageTypes[] }): ImageTypes[] => {
  let currentIndex = array.length;
  let randomIndex: number;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const generateSquare = () => {
  return shuffle({ array: squareData }).map((sq) => (
    <motion.div
      variants={item}
      key={sq.id}
      layout
      transition={{ duration: 3, type: "spring" }}
      className="w-full h-full rounded-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquare());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquare());

    timeoutRef.current = setTimeout(shuffleSquares, 5000);
  };

  return (
    <div className="w-full mx-auto items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid grid-cols-3 grid-rows-3 gap-3 h-[300px] w-[300px] lg:h-[450px] lg:w-[450px]"
      >
        {squares}
      </motion.div>
    </div>
  );
};

export default ShuffleHero;
