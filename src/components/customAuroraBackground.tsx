"use client";

import { motion } from "framer-motion";

import { AuroraBackground } from "./ui/aurora-background";
import { FlipWords } from "./ui/flip-word";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

// interface auroraBackgroundDemoProps extends React.HTMLProps<HTMLDivElement> {}
// {}: auroraBackgroundDemoProps
export function AuroraBackgroundDemo() {
  const words = ["better", "responsive", "beautiful", "modern"];
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();
  const handleFade = () => {
    setIsFading(true);
    setTimeout(() => {
      router.push("whoAmI");
    }, 800);
  };
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={isFading ? { opacity: 0 } : { opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
    >
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="ps-5 md:ps-0 md:text-7xl mx-auto font-normal text-4xl text-neutral-400 dark:text-neutral-400">
            Hi, my name is{" "}
            <span className="text-cyan-300">Mohammad Khosrvani</span>
            <div className="md:text-4xl pt-5 text-lg sm:text-3xl">
              I&apos;m an{" "}
              <span className="text-white">
                independent creative{" "}
                <span className="text-cyan-300">Frontend </span>developer
              </span>{" "}
              from Shiraz.
              <br />I build websites
              <FlipWords words={words} /> <br />
            </div>
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4"></div>
          <Button variant={"cyan"} onClick={handleFade}>
            who am i
          </Button>
          
        </motion.div>
      </AuroraBackground>
    </motion.div>
  );
}
