import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type Quote = {
  text: string;
  artist: string;
  title: string;
  source: string;
};

export default function QuotesWithLogo() {
  const [data, setData] = useState<Quote>();

  const fetchData = async () => {
    const req = await fetch("/quotes.json");
    const jsonData = await req.json();
    const len = jsonData.length;
    const picked = jsonData[Math.floor(Math.random() * len)];

    return setData(picked);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-xs">
        <span className="text-ellipsis overflow-hidden">
          <a href={data && data.source}>
            {data && data.artist} / {data && data.title}
          </a>
        </span>
        <img
          src="/assets/images/avatar.jpg"
          className="rounded-lg grayscale blur-sm hover:blur-none"
        />
      </div>
      <div>
        <div
          className="text-xl mt-7"
          style={{
            fontFamily: "serif",
            textShadow: `1px 1px 3px gray`,
          }}
        >
          {data && (
            <motion.div
              key={data.text}
              style={{
                display: "inline-flex",
                writingMode: "vertical-rl",
              }}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {Array.from(data.text).map((letter, index) => (
                <motion.p variants={child} key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.p>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
