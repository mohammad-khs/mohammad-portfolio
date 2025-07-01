"use client";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import React, { FC } from "react";
import { motion } from "framer-motion";
import {
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Page: FC = () => {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-xl md:text-2xl" />,
      content: (
        <a
          href="mailto:khosravani.mohammad82@gmail.com"
          className="hover:text-cyan-50  hidden md:block"
        >
          <span className="hover:underline">
            khosravani.mohammad82@gmail.com
          </span>
        </a>
      ),
      mobileLink: "mailto:khosravani.mohammad82@gmail.com",
    },
    {
      icon: <FaPhone className="text-xl md:text-2xl" />,
      content: (
        <a
          href="tel:+989366055659"
          className="hover:text-cyan-50  hidden md:block"
        >
          <span className="hover:underline">+98 936 605 5659</span>
        </a>
      ),
      mobileLink: "tel:+989366055659",
    },
    {
      icon: <FaTelegram className="text-xl md:text-2xl" />,
      content: (
        <a
          href="https://t.me/mohammad_khsv"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-50  hidden md:block"
        >
          <span className="hover:underline">@mohammad_khsv</span>
        </a>
      ),
      mobileLink: "https://t.me/mohammad_khsv",
    },
    {
      icon: <FaWhatsapp className="text-xl md:text-2xl" />,
      content: (
        <a
          href="https://wa.me/989172275520"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-50  hidden md:block"
        >
          <span className="hover:underline">+98 917 227 5520</span>
        </a>
      ),
      mobileLink: "https://wa.me/989172275520",
    },
    {
      icon: <FaInstagram className="text-xl md:text-2xl" />,
      content: (
        <a
          href="https://instagram.com/m.khs13"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-50  hidden md:block"
        >
          <span className="hover:underline">@m.khs13</span>
        </a>
      ),
      mobileLink: "https://instagram.com/m.khs13",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl md:text-2xl" />,
      content: (
        <p className="hover:text-cyan-50  cursor-default hidden md:block">
          Iran, Fars, Shiraz
        </p>
      ),
    },
  ];

  return (
    <>
      <LampDemo className="mt-10">
        <motion.div
          initial={{ opacity: 0.0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <LampContainer>
            <motion.div
              initial={{ opacity: 1, y: 100 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="text-center"
            >
              <motion.h1 className="bg-gradient-to-b md:mt-24 from-cyan-50 to-cyan-300 py-4 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                Let&apos;s Connect
              </motion.h1>
              <motion.p
                className="text-cyan-200/80 text-sm md:text-lg max-w-lg mx-auto mt-2 md:mt-4 px-4 md:px-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Reach out through any of these channels
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-8 md:mt-12 grid gap-4 md:gap-6 text-cyan-100 text-base md:text-lg max-w-md mx-auto px-4 md:px-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="hidden md:flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-cyan-900/20  group"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <a
                    href={item.mobileLink}
                    target={
                      item.mobileLink?.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="md:hidden p-3 rounded-full bg-cyan-900/30 hover:bg-cyan-900/50 "
                  >
                    {item.icon}
                  </a>
                  <div className="hidden md:block p-2 rounded-full bg-cyan-900/30 group-hover:bg-cyan-900/50 ">
                    {item.icon}
                  </div>
                  <div className="flex-1">{item.content}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile-only icon grid */}
            <motion.div
              className="mt-8 grid grid-cols-3 gap-4 px-6 md:hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {contactItems.slice(0, 6).map((item, index) => (
                <motion.a
                  key={index}
                  href={item.mobileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center p-4 rounded-xl bg-cyan-900/30 hover:bg-cyan-500/30 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(103, 232, 249, 0.4)",
                  }}
                  whileTap={{
                    scale: 0.95,
                    backgroundColor: "rgba(103, 232, 249, 0.5)",
                  }}
                >
                  <div className="text-cyan-300 group-hover:text-cyan-50 ">
                    {React.cloneElement(item.icon, {
                      className: "text-2xl md:text-2xl",
                    })}
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Thank You Section */}
            <motion.div
              className="mt-12 md:mt-16 md:mb-32 text-center px-4 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.h3
                className="text-xl md:text-3xl font-light text-cyan-100 mb-3 md:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Thank You For Reaching Out
              </motion.h3>
              <motion.p
                className="text-cyan-200/80 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                I appreciate you taking the time to visit my portfolio. Whether
                you have a project in mind, want to collaborate, or just say
                hello - I&apos;d love to hear from you!
              </motion.p>
              <motion.div
                className="mt-6 md:mt-8 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-300 to-cyan-500/0 w-3/4 mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>
          </LampContainer>
        </motion.div>
      </LampDemo>
    </>
  );
};

export default Page;
