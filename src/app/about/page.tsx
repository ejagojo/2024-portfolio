"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "../components/Tooltip";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Waves from "../components/Waves";

export default function About() {
  // State to control the visibility of the LaTeX code
  const [showLatex, setShowLatex] = useState(false);

  // State for copy-to-clipboard success message
  const [copySuccess, setCopySuccess] = useState('');

  // Function to copy LaTeX template to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(latexTemplate)
      .then(() => {
        setCopySuccess('LaTeX template copied to clipboard!');
        // Hide the message after 3 seconds
        setTimeout(() => setCopySuccess(''), 3000);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 px-8"
    >
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

      {/* Professional Experience Section */}
      <h2 className="text-4xl font-bold mb-12 text-center">
        Professional Experience
      </h2>
      <div className="space-y-12">
        {[
          {
            title: "Wayfair - IT Engineer (Co-op)",
            details: [
              "Boston, MA | Jan 2024 - Aug 2024",
              "Developed an AI-powered Slack support bot using Slack Bolt framework and OpenAI’s GPT-4 Turbo model, reducing support response times by 40% and increasing ticket resolution efficiency.",
              "Automated the deprovisioning of over 500 Chrome devices by creating PowerShell scripts with PSGSuite, reducing manual workload by 95% and saving over 100 hours of manual deprovision of devices.",
              "Streamlined the allocation of user licenses by integrating Zoom API, improving accessibility for over 1,000 Zoom users and saving 20+ hours per week in manual assignments.",
            ],
            image: "/Wayfair-Logo.webp",
          },
          {
            title: "Cognizant - Generative AI Externship",
            details: [
              "Remote | Jun 2024 - Jul 2024",
              "Developed a pre-trained image classifier for dog breed identification using Hugging Face models, achieving an accuracy of 92%, demonstrating proficiency in deep learning and transfer learning.",
              "Collaborated with a team of peers and mentors, enhancing project outcomes and fostering a cooperative learning environment during the AI externship.",
            ],
            image: "/Cognizant-Logo.png",
          },
          {
            title: "StarterKitz - Freelance Developer",
            details: [
              "Remote | Jun 2024 - Aug 2024",
              "Collaborated closely with the client to understand and implement their vision for the website, ensuring the platform met all specified requirements.",
              "Developed the platform using React.js and Firebase, utilizing Firestore (NoSQL database) to store CookBook information and Firebase Storage for assets like videos and photos.",
              "Worked alongside another freelancer using Git for version control, facilitating efficient collaboration and code management throughout the project.",
            ],
            image: "/starter-kitz.png",
          },
        ].map((experience, index) => (
          <Tooltip key={index} text={`Details about ${experience.title}`}>
            <motion.div
              className="relative flex flex-col md:flex-row items-center gap-8 p-6 border border-gray-700 rounded-lg shadow-lg bg-black hover:scale-[1.02] transition-transform duration-300"
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="border-4 border-white p-1 rounded-lg">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1 text-lg text-gray-300">
                <h3 className="text-3xl font-semibold mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-400 mb-4">{experience.details[0]}</p>
                <ul className="list-disc ml-6 space-y-2">
                  {experience.details.slice(1).map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Tooltip>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-4">
        {/* View Resume Button */}
        <a
          href="/assets/my-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full md:w-auto bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
        >
          View My Resume
        </a>

        {/* Toggle LaTeX Template Button */}
        <button
          onClick={() => setShowLatex(!showLatex)}
          className="flex items-center justify-center w-full md:w-auto bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
        >
          {showLatex ? (
            <>
              <FaChevronUp className="mr-2" />
              Hide LaTeX Resume Template
            </>
          ) : (
            <>
              <FaChevronDown className="mr-2" />
              Show LaTeX Resume Template
            </>
          )}
        </button>
      </div>

      {/* LaTeX Template Section */}
      {showLatex && (
        <div className="mt-8">
          <h2 className="text-4xl font-bold mb-6 text-center">
            LaTeX Resume Template
          </h2>
          {/* Copy to Clipboard Button */}
          <div className="flex justify-between items-center mb-2">
            {copySuccess && (
              <p className="text-green-500">{copySuccess}</p>
            )}
            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Copy to Clipboard
            </button>
          </div>
          <SyntaxHighlighter language="latex" style={vscDarkPlus}>
            {latexTemplate}
          </SyntaxHighlighter>
        </div>
      )}
    </motion.section>
  );
}
