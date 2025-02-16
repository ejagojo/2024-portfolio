"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaPython,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import AnimatedTextCircle from "./components/AnimatedTextCircle";
import Waves from "./components/Waves";
import Footer from "./components/Footer"; // Import Footer Component

export default function HomePage() {
  // Split the welcome text into two lines
  const firstLine = "WELCOME";
  const secondLine = "TO MY PORTFOLIO";

  // Split each line into individual characters
  const firstLineChars = firstLine.split("");
  const secondLineChars = secondLine.split("");

  return (
    <div className="relative text-white font-sans overflow-hidden min-h-screen flex flex-col">
      {/* Background Gradient applied to the parent div */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black via-black to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      
      {/* Waves Component */}
      <Waves
        lineColor="#fff"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      {/* Main Content */}
      <div className="flex-grow">
        {/* Floating Background Icons with distinct starting positions */}
        {[
          {
            Component: FaGithub,
            size: 60,
            startTop: "10%",
            startLeft: "15%",
            xRange: [-20, 20],
            yRange: [-10, 10],
            duration: 12,
          },
          {
            Component: FaLinkedin,
            size: 60,
            startTop: "20%",
            startLeft: "75%",
            xRange: [-25, 25],
            yRange: [-15, 15],
            duration: 10,
          },
          {
            Component: FaReact,
            size: 70,
            startTop: "30%",
            startLeft: "10%",
            xRange: [-30, 30],
            yRange: [-20, 20],
            duration: 14,
          },
          {
            Component: FaPython,
            size: 50,
            startTop: "40%",
            startLeft: "85%",
            xRange: [-15, 15],
            yRange: [-10, 10],
            duration: 15,
          },
          {
            Component: FaJs,
            size: 50,
            startTop: "50%",
            startLeft: "25%",
            xRange: [-20, 20],
            yRange: [-10, 10],
            duration: 13,
          },
          {
            Component: FaDatabase,
            size: 60,
            startTop: "60%",
            startLeft: "70%",
            xRange: [-15, 15],
            yRange: [-10, 10],
            duration: 10,
          },
        ].map((icon, index) => (
          <motion.div
            key={index}
            className="absolute opacity-40 text-gray-600"
            style={{
              top: icon.startTop,
              left: icon.startLeft,
            }}
            initial={{ x: icon.xRange[0], y: icon.yRange[0] }}
            animate={{ x: icon.xRange[1], y: icon.yRange[1] }}
            transition={{
              repeat: Infinity,
              duration: icon.duration,
              ease: "linear",
              repeatType: "mirror",
            }}
          >
            <icon.Component size={icon.size} />
          </motion.div>
        ))}

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
          {/* Animated Welcome Text */}
          <div className="relative z-10 mt-16 md:mt-24">
            {/* First Line */}
            <div className="flex justify-center items-center">
              {firstLineChars.map((char, index) => (
                <motion.span
                  key={`first-${index}`}
                  className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mx-1"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Second Line */}
            <div className="flex justify-center items-center mt-4">
              {secondLineChars.map((char, index) => (
                <motion.span
                  key={`second-${index}`}
                  className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mx-1"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: (firstLineChars.length + index) * 0.05,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subheading */}
          <motion.h3
            className="text-xl md:text-2xl text-gray-200 mt-10 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: (firstLineChars.length + secondLineChars.length) * 0.05,
            }}
          >
            I&apos;m Eljohn Agojo, Software Engineer
          </motion.h3>

          {/* Animated Circle Component */}
          <div className="mt-10 mb-10 relative z-10">
            <AnimatedTextCircle />
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-6 z-10">
            <motion.a
              href="https://linkedin.com/in/eljohn-agojo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <FaLinkedin size={30} className="hover:text-gray-400 transition" />
            </motion.a>
            <motion.a
              href="https://github.com/ejagojo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <FaGithub size={30} className="hover:text-gray-400 transition" />
            </motion.a>
          </div>
        </section>
      </div>
    </div>
  );
}
