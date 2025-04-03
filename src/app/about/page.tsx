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
  const [copySuccess, setCopySuccess] = useState("");

  // Restore original LaTeX template
  const latexTemplate = String.raw`
% resume_template.tex

\documentclass[letterpaper,11pt]{article}

% --------------- PACKAGES -----------------------
\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\usepackage{fontawesome}
\usepackage[dvipsnames]{xcolor}
\input{glyphtounicode}

% ---------- RESUME FORMAT ADJUSTMENTS -------------
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}
{0em}{}
[\color{black}\titlerule \vspace{-5pt}]

\pdfgentounicode=1

% ---------- CUSTOM COMMANDS -----------------------
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-----------------RESUME STARTS HERE----------------------

\begin{document}

%---------- HEADING ----------
\begin{center}
  \textbf{\Huge \scshape {{Your Name}}} \\ \vspace{2pt}
  \href{mailto:{{your.email@example.com}}}{\textcolor{black}{\faEnvelopeO\enspace \textbf{\small {{your.email@example.com}}}}} $|$
  \href{https://linkedin.com/in/{{your-linkedin}}}{\textcolor{black}{\faLinkedin\enspace \textbf{\small linkedin.com/in/{{your-linkedin}}}}} $|$
  \href{https://github.com/{{your-github}}}{\textcolor{black}{\faGithub\enspace \textbf{\small github.com/{{your-github}}}}}
\end{center}

%----------- EDUCATION -----------
\section{Education}
\resumeSubHeadingListStart
  \resumeSubheading
    {{Your University}}{City, State}
    {{Your Degree}}{Graduation Date}
    \vspace{.5mm}
    \resumeItemListStart
      \resumeItem{\textbf{Coursework:} List your relevant coursework here.}
    \resumeItemListEnd
\resumeSubHeadingListEnd

%----------- PROFESSIONAL EXPERIENCE -----------
\section{Professional Experience}
\resumeSubHeadingListStart

  % Experience 1
  \resumeSubheading
    {{Company Name}}{City, State or Remote}
    {{Your Position Title}}{Start Date -- End Date}
    \resumeItemListStart
      \resumeItem{Describe your responsibilities and achievements using action verbs and quantifiable results.}
      \resumeItem{Example: Developed an AI-powered Slack support bot, reducing support response times by \textbf{40\%}.}
    \resumeItemListEnd

  % Experience 2
  \resumeSubheading
    {{Company Name}}{City, State or Remote}
    {{Your Position Title}}{Start Date -- End Date}
    \resumeItemListStart
      \resumeItem{Describe another experience.}
    \resumeItemListEnd

  % Add more experiences as needed

\resumeSubHeadingListEnd

%----------- PROJECTS -----------
\section{Projects}
\resumeSubHeadingListStart

  \resumeProjectHeading
    {\textbf{{Project Name}} $|$ \emph{\textcolor{black}{{Technologies Used}}}}{}
    \resumeItemListStart
      \resumeItem{Describe the project and your contributions.}
      \resumeItem{Example: Developed a web application that does XYZ using React.js and Firebase.}
    \resumeItemListEnd

  % Add more projects as needed

\resumeSubHeadingListEnd

%----------- SKILLS & TOOLS -----------
\section{Skills \& Technical Tools}
\begin{itemize}[leftmargin=0.15in, label={}]
  \small{\item{
    \textbf{Languages}{: List programming languages you are proficient in.} \\
    \textbf{Web Technologies}{: List web technologies (e.g., React.js, Node.js).} \\
    \textbf{Technologies}{: List other technologies (e.g., Git, Docker).} \\
    \textbf{Developer Tools}{: List tools you use (e.g., VS Code, Jira).}
  }}
\end{itemize}

%-------------------------------------------
\end{document}
`;

  // Copy LaTeX template to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(latexTemplate).then(() => {
      setCopySuccess("LaTeX template copied to clipboard!");
      setTimeout(() => setCopySuccess(""), 3000);
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-20 px-8"
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
      <h2 className="text-4xl font-bold mb-12 text-center relative z-10">
        Professional Experience
      </h2>

      <div className="space-y-12 relative z-10">
        {[
          {
            title: "Savvas - Software Engineer Intern",
            details: [
              "Boston, MA | Jun 2025 - August 2025",
              "Incoming Software Engineer Intern",
            ],
            image: "/Savvas-Logo.jpeg",
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
                <h3 className="text-3xl font-semibold mb-2">{experience.title}</h3>
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

      {/* Resume and LaTeX Template */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-4 relative z-20">
        {/* Ensure button is clickable */}
        <a
          href="/assets/my-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition shadow-md"
        >
          View My Resume
        </a>

        <button
          onClick={() => setShowLatex(!showLatex)}
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition shadow-md"
        >
          {showLatex ? (
            <>
              <FaChevronUp className="inline-block mr-2" />
              Hide LaTeX Resume Template
            </>
          ) : (
            <>
              <FaChevronDown className="inline-block mr-2" />
              Show LaTeX Resume Template
            </>
          )}
        </button>
      </div>

      {/* LaTeX Template Section */}
      {showLatex && (
        <div className="mt-8 p-4 bg-gray-900 rounded-lg relative z-20">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">LaTeX Resume Template</h2>

          <div className="flex justify-between items-center mb-2">
            {copySuccess && <p className="text-green-500">{copySuccess}</p>}
            <button
              onClick={copyToClipboard}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Copy to Clipboard
            </button>
          </div>

          <SyntaxHighlighter language="latex" style={vscDarkPlus} className="p-3 rounded-md">
            {latexTemplate}
          </SyntaxHighlighter>
        </div>
      )}
    </motion.section>
  );
}
