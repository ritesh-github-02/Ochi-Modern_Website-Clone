/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".001" className="w-full py-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 flex mt-[3vw] mb-[3vw] border-zinc-300 whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{repeat: Infinity, ease: "linear", duration: 10}}
          className="text-[20vw] leading-none font-bold tracking-tighter -mb-[1vw] -mt-[3vw] mr-[10vw] py-2 uppercase "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{repeat: Infinity, ease: "linear", duration: 10}}
          className="text-[20vw] leading-none font-bold tracking-tighter -mb-[1vw] -mt-[3vw] py-2 uppercase "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
