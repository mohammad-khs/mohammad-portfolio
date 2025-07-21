"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuroraBackground } from "./ui/aurora-background";
import dynamic from "next/dynamic";
import { FaArrowRight } from "react-icons/fa";

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
      title: "E-commerce Platform For Trees",
      description: "Full-featured online store with Next.js",
      tags: ["React", "Next.js", "Tailwind", "Typescript"],
      href: "https://derakhtman.ir",
    },
    {
      title: "algorithm visualizer",
      description: "Interactive algorithm visualizer with animations",
      tags: ["Next.js", "Typescript", "Tailwind"],
      href: "https://algorithm-visualizer-beta-three.vercel.app/",
    },
    {
      title: "A Gallary Like Unsplash",
      description: "RPIP stands for React Project Infinite Picture",
      tags: ["react.js", "React Query", "Tailwind"],
      href: "https://github.com/mohammad-khs/RPIP",
    },
    {
      title: "Memo-Massanger",
      description:
        "A real time messanger with the help of google and github OAuth key",
      tags: ["react.js", "React Query", "Tailwind", "Typescript"],
      href: "https://memo-messanger.vercel.app/login",
    },
  ];

  const testimonials = [
    {
      quote: "Exceptional attention to detail and creative solutions.",
      author: "Ali Panah, Project Manager",
    },
  ];

  const handleFade = () => {
    setIsFading(true);
    setTimeout(() => {
      router.push("myContact");
    }, 800);
  };

  // Skill categories with icons
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: "💻",
      skills: [
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Styling & Libraries",
      icon: "🎨",
      skills: [
        "Bootstrap",
        "Tailwind CSS",
        "Material-UI",
        "Framer Motion",
        "shadcn",
        "nextUI",
      ],
    },
    {
      title: "State & Data Management",
      icon: "🔄",
      skills: ["RESTful APIs", "React Query", "React Context", "zustand"],
    },
    {
      title: "Tools & Platforms",
      icon: "🔧",
      skills: ["Git", "GitHub", "Leaflet.js"],
    },
    {
      title: "Advanced Concepts",
      icon: "🚀",
      skills: [
        "Responsive Design",
        "Technical Documentation",
        "ISP",
        "SSR",
        "CSR",
        "SSG",
      ],
    },
    {
      title: "Methodologies",
      icon: "📋",
      skills: ["Agile", "Scrum", "Kanban"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isFading ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
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
            <div className="text-center max-w-3xl px-4">
              <motion.h1
                className="text-4xl md:text-7xl text-neutral-300 font-light mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I&apos;m <br />
                <motion.span
                  className="text-cyan-300 font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Mohammad Khosravani
                </motion.span>
              </motion.h1>
              <motion.div
                className="mt-6 text-lg md:text-2xl text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I&apos;m an{" "}
                <span className="text-white font-medium">
                  independent creative{" "}
                  <span className="text-cyan-300">Frontend </span>developer
                </span>{" "}
                from Shiraz. <br />
                I build websites <FlipWords words={words} />
              </motion.div>

              <motion.button
                onClick={handleFade}
                className="mt-10 px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-700 hover:to-teal-600 rounded-full text-white font-medium shadow-lg shadow-cyan-900/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Get In Touch
              </motion.button>
            </div>

            {/* Skills Section - Grid Layout */}
            <div className="w-full max-w-6xl">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                My Technical Expertise
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg transition-all duration-300 hover:shadow-cyan-900/30 hover:border-cyan-500/30"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-3xl">{category.icon}</span>
                      <h3 className="text-xl font-bold text-cyan-300">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-2 bg-cyan-900/20 text-cyan-300 rounded-lg text-sm font-medium backdrop-blur-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#0891b230",
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <motion.section
              className="w-full max-w-6xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent"
                  initial={{ y: -20 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Featured Projects
                </motion.h2>
                <motion.p
                  className="text-neutral-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Here are some of my recent works that showcase my skills and
                  creativity
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.03] rounded-2xl p-6 overflow-hidden border border-white/10 backdrop-blur-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -10 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <a href={project.href}>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                            <span className="text-lg">
                              <FaArrowRight />
                            </span>
                          </div>
                        </a>
                      </div>
                      <p className="text-neutral-400 mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-cyan-900/40 text-cyan-300 px-3 py-1.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="https://github.com/mohammad-khs?tab=repositories"
                  target="_blank"
                  className="px-6 py-2.5 border border-cyan-500/30 text-cyan-300 rounded-full hover:bg-cyan-900/20 transition-all duration-300"
                >
                  View All Projects
                </a>
              </motion.div>
            </motion.section>

            {/* Testimonials */}
            <motion.section
              className="w-full max-w-4xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent"
                  initial={{ y: -20 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Client Testimonials
                </motion.h2>
                <motion.p
                  className="text-neutral-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  What people I&apos;ve worked with say about me
                </motion.p>
              </div>

              <div className="grid gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/[0.03] rounded-2xl p-6 border border-white/10 backdrop-blur-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-cyan-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center text-xl">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-neutral-300 italic mb-4 text-lg">
                          &apos;{testimonial.quote}&apos;
                        </p>
                        <p className="text-cyan-300 font-medium">
                          {testimonial.author}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Contact CTA */}
            <motion.section
              className="w-full max-w-4xl text-center py-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-xl">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4"
                  initial={{ y: -10 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Let&apos;s Create Something Amazing Together
                </motion.h2>
                <motion.p
                  className="text-neutral-400 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Have a project in mind? I&apos;d love to hear about it.
                  Let&apos;s collaborate to bring your vision to life.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <button
                    onClick={handleFade}
                    className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-700 hover:to-teal-600 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-900/30"
                  >
                    Get In Touch
                  </button>
                </motion.div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </AuroraBackground>
    </motion.div>
  );
}
