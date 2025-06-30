"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuroraBackground } from "./ui/aurora-background";
import dynamic from "next/dynamic";


const FlipWords = dynamic(
  () => import("./ui/flip-word").then((mod) => mod.FlipWords),
  {
    ssr: false,
    loading: () => <span>modern</span>,
  }
);

export function AuroraBackgroundDemo() {
  const words = ["better", "responsive", "beautiful", "modern"];
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "Interactive portfolio with animations",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
    },
  ];

  const testimonials = [
    {
      quote: "Exceptional attention to detail and creative solutions.",
      author: "Sarah Johnson, Design Director",
    },
    {
      quote: "Delivered beyond our expectations on tight deadlines.",
      author: "Michael Chen, Product Manager",
    },
  ];

  const handleFade = () => {
    setIsFading(true);
    setTimeout(() => {
      router.push("myContact");
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isFading ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AuroraBackground>
        <div className="mt-10 mx-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="relative flex flex-col gap-12 items-center justify-center"
          >
            {/* Hero Section */}
            <div className="">
              <h1 className="text-4xl md:text-7xl text-neutral-300 font-light">
                Hi, my name is <br />
                <span className="text-cyan-300 font-semibold">
                  Mohammad Khosravani
                </span>
              </h1>
              <div className="mt-6 text-lg md:text-2xl text-neutral-400">
                I&apos;m an{" "}
                <span className="text-white">
                  independent creative{" "}
                  <span className="text-cyan-300">Frontend </span>developer
                </span>{" "}
                from Shiraz. <br />
                I build websites <FlipWords words={words} />
              </div>
            </div>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-2xl p-8"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "React/Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "Framer Motion",
                  "UI/UX Design",
                  "GraphQL",
                  "Jest",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/10 rounded-lg p-3 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-full max-w-4xl"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-xl font-medium text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-full max-w-4xl"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">
                What People Say
              </h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6">
                    <p className="text-neutral-300 italic mb-2">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-cyan-300">{testimonial.author}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Contact CTA */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="w-full max-w-4xl text-center"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
                Let's Work Together
              </h2>
              <p className="text-neutral-400 mb-6">
                Have a project in mind? I'd love to hear about it.
              </p>
              <button
                onClick={handleFade}
                className="px-8 py-3 mb-28 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white font-medium transition-colors"
              >
                Get In Touch
              </button>
            </motion.section>
          </motion.div>
        </div>
      </AuroraBackground>
    </motion.div>
  );
}
