"use client";
import { FloatingDock } from "@/components/ui/navbar";
import { BiHome, BiQuestionMark } from "react-icons/bi";

export default function FloatingDockWrapper() {
  return (
    <FloatingDock
      items={[
        { title: "my contact", href: "myContact", icon: <BiQuestionMark className="text-white md:w-8 md:h-8" /> },
        { title: "about me", href: "/", icon: <BiHome className="text-white md:w-8 md:h-8" /> },
      ]}
    />
  );
}
