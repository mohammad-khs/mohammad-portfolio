"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type WindowDimensions = {
  width: number | undefined;
  height: number | undefined;
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center bg-slate-950 w-full overflow-hidden",
        className
      )}
    >
      {/* Background elements container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left gradient cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "7rem" }}
          whileInView={
            windowWidth! <= 640
              ? { opacity: 1, width: "15rem" }
              : { opacity: 1, width: "30rem" }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 h-56 w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right gradient cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "7rem" }}
          whileInView={
            windowWidth! <= 640
              ? { opacity: 1, width: "15rem" }
              : { opacity: 1, width: "30rem" }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Glow effects */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

        {/* Central glow */}

        {/* Bottom mask */}
        <div className="absolute top-1/2 left-0 w-full h-44 translate-y-[12.5rem] bg-slate-950"></div>
      </div>

      {/* Content container - higher */}
      <div className="relative w-full flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export const LampDemo = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <LampContainer className={className}>{children}</LampContainer>;
};
