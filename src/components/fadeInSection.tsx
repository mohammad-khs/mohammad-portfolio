"use client";
import { FC } from "react";
import { motion } from "framer-motion";

import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";

import PythonLogo from "./icons/pythonLogo";
interface FadeInSectionProps {}

const FadeInSection: FC<FadeInSectionProps> = () => {
  return (
    <>
      <section
        className="text-white h-[100vh] flex justify-center items-center bg-slate-950"
        
      >
        <motion.div
          className="absolute"
          initial={{ opacity: 0.0, y: 140 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <div className="rounded-lg border-white border p-4 m-4">
            <div className="">
              <h1 className="text-3xl mb-2 font-semibold">
                Frontend Developer
              </h1>
              <div className="m-2 sm:mx-4 text-zinc-400">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </div>
              <div className="text-center my-2 text-zinc-400">
                Languages I speak :
              </div>
              <ul className="flex flex-row gap-3 justify-center mt-2">
                <div className="p-1 rounded-lg transition-colors hover:bg-opacity-50">
                  <PythonLogo />
                </div>
                <div className="p-1 rounded-lg transition-colors hover:bg-opacity-50">
                  <BiLogoJavascript className="h-9 w-9 text-[#f7df1e]" />
                </div>

                <div className="p-1 rounded-lg transition-colors hover:bg-opacity-50">
                  <BiLogoTypescript className="h-9 w-9 text-[#3178c6]" />
                </div>
                <div className="p-1 rounded-lg transition-colors hover:bg-opacity-50">
                  <BiLogoHtml5 className="h-9 w-9 text-[#f1662a]" />
                </div>
                <div className="p-1 rounded-lg transition-colors hover:bg-opacity-50">
                  <BiLogoCss3 className="h-9 w-9 text-[#2965f1]" />
                </div>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default FadeInSection;
