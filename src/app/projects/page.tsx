"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "../components/Tooltip";
import TechnologyTimeline from "../components/TechnologyTimeline"; 

export default function Projects() {
  return (
    <div className="py-20 px-8">
      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="space-y-12">
          {[
            {
              title: "SplitLy",
              details: [
                "React.js, Tailwind CSS, Spring Boot, Firebase, PostgreSQL",
                "Built a web platform for managing expenses, OCR-based itemized breakdowns, and dynamic user assignment to shared expenses.",
                "Developed a robust Spring Boot backend with integrated Firebase Authentication and PostgreSQL for secure and efficient data management."
              ],
              image: "/assets/splitly.png",
              link: "https://split-ly-front.vercel.app/"
            },
            {
              title: "Hire Track",
              details: [
                "JavaScript, Chrome Extensions, Google Sheets API",
                "Developed a Chrome extension to streamline job application tracking, allowing users to save and log job details efficiently.",
                "Integrated Google Sheets API for logging job applications directly into a user’s Google Sheets, enabling easy tracking of job application history.",
                "Automated tracking workflows to increase productivity, simplifying the job search and application process.",
              ],
              image: "/assets/Hire-Track.png",
              link: "https://github.com/ejagojo/Hire_Track",
            },
            {
              title: "Polaroid Me",
              details: [
                "JavaScript, React.js, Spotify API, Tailwind CSS",
                "Developed an interactive web app that generates personalized polaroid-style collages based on a user’s music taste and Spotify preferences.",
                "Integrated the Spotify API to dynamically pull top tracks, artists, and genres, automating the collage generation process for a unique, user-centric output.",
              ],
              image: "/assets/polaroid-me.png",
              link: "https://polaroid-me.vercel.app/",
            },
            {
              title: "This website!!!",
              details: [
                "Typescript, Next.js, Tailwind CSS",
              ],
              image: "/assets/website.png",
              link: "https://github.com/ejagojo/2024-portfolio.git",
            },
          ].map((project, index) => (
            <Tooltip key={index} text={`Project details for ${project.title}`}>
              <motion.div
                className="relative flex flex-col md:flex-row items-center gap-8 p-6 border rounded-lg shadow-lg bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="border-4 border-white p-1 rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1 text-lg text-gray-300">
                  <h3 className="text-3xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.details[0]}</p>
                  <ul className="list-disc ml-6 space-y-2">
                    {project.details.slice(1).map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <p className="text-gray-400 mt-4">
                    Visit Project:{" "}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {/* {project.title === "Polaroid Me" 
                        ? "Visit Polaroid Me"
                        : "GitHub Repository"} */}
                        {project.title === "SplitLy"
                        ? "Visit SplitLy"
                        : project.title === "Polaroid Me"
                        ? "Visit Polaroid Me"
                        : "GitHub Repository"
                        }
                    </a>
                  </p>
                </div>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </motion.section>

      {/* Skills & Technical Tools Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-8 text-center mb-20"
      >
        <h2 className="text-4xl font-bold mb-12">Skills & Technical Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-300 text-lg">
          {[
            {
              title: "Languages",
              skills:
                "C++, Python, HTML/CSS, JavaScript, Java, PowerShell, SQL, GoLang (exposure)",
            },
            {
              title: "Web Technologies",
              skills: "React.js, React Native, Next.js, Tailwind CSS",
            },
            {
              title: "Technologies",
              skills: "Git, MongoDB, Docker, Firebase, AWS, NoSQL, MySQL",
            },
            {
              title: "Developer Tools",
              skills:
                "GitHub, Figma, Railway, Jira, VS Code, Linux, ServiceNow",
            },
          ].map((skillCategory, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex flex-col items-center cursor-pointer p-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {skillCategory.title}
              </h3>
              <p className="text-gray-100">{skillCategory.skills}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technology Timeline Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Technology Timeline</h2>
        <TechnologyTimeline />
      </motion.section>
    </div>
  );
}
