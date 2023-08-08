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

  const regex_cjk =
    /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\u3131-\uD79D]/;

  return (
    <>
      <div className="max-w-md">
        <div style={{ maxWidth: "180px" }}>
          <span className="text-ellipsis overflow-hidden">
            <a href={data && data.source}>
              <span className="block text-lg">{data && data.title}</span>
              <span className="block truncate">{data && data.artist}</span>
            </a>
          </span>
        </div>
        <div className="flex flex-row items-start max-h-64">
          <div className="basis-1/2">
            <img
              src="/assets/images/avatar.jpg"
              className="rounded-lg grayscale blur-sm hover:blur-none"
              onClick={fetchData}
              style={{
                maxWidth: "200px",
              }}
            />
          </div>
          <div
            className="text-xl basis-1/2"
            style={{
              fontFamily: "serif",
              textShadow: `1px 1px 3px gray`,
            }}
          >
            {data && (
              <motion.div
                key={data.text}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  writingMode: "vertical-rl",
                }}
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {Array.from(data.text).map((letter, index) => {
                  return (
                    <>
                      {(data.text.charAt(index - 1).match(regex_cjk) &&
                        letter.match(" ")) ||
                      data.text.charAt(index - 1).match("って") ? (
                        <div style={{ flexBasis: "100%", height: 0 }}></div>
                      ) : (
                        ""
                      )}
                      <motion.p variants={child} key={index}>
                        {!data.text.charAt(index - 1).match(regex_cjk) &&
                        letter == " "
                          ? "\u00A0"
                          : letter}
                      </motion.p>
                    </>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
