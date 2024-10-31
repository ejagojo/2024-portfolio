"use client"; // Ensures this main component runs on the client

import AnimatedTextCircle from './components/AnimatedTextCircle';
import ScrollIndicator from './components/ScrollIndicator';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaReact, FaPython, FaJs, FaDatabase } from 'react-icons/fa';
import Footer from './components/Footer';
import Image from 'next/image';
import TechnologyTimeline from './components/TechnologyTimeline';
import { Tooltip } from './components/Tooltip';

export default function HomePage() {
    return (
        <div className="relative bg-black text-white font-sans overflow-hidden min-h-screen">
            {/* Hero Section with Expanded Background */}
            <section className="relative flex flex-col items-center justify-center min-h-screen text-center">
                {/* Floating Background Icons with distinct starting positions */}
                {[
                    { Component: FaGithub, size: 60, startTop: '10%', startLeft: '15%', xRange: [-20, 20], yRange: [-10, 10], duration: 12 },
                    { Component: FaLinkedin, size: 60, startTop: '20%', startLeft: '75%', xRange: [-25, 25], yRange: [-15, 15], duration: 10 },
                    { Component: FaReact, size: 70, startTop: '30%', startLeft: '10%', xRange: [-30, 30], yRange: [-20, 20], duration: 14 },
                    { Component: FaPython, size: 50, startTop: '40%', startLeft: '85%', xRange: [-15, 15], yRange: [-10, 10], duration: 15 },
                    { Component: FaJs, size: 50, startTop: '50%', startLeft: '25%', xRange: [-20, 20], yRange: [-10, 10], duration: 13 },
                    { Component: FaDatabase, size: 60, startTop: '60%', startLeft: '70%', xRange: [-15, 15], yRange: [-10, 10], duration: 10 },
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
                        transition={{ repeat: Infinity, duration: icon.duration, ease: "linear" }}
                    >
                        <icon.Component size={icon.size} />
                    </motion.div>
                ))}

                {/* Main Heading */}
                {/* <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="text-6xl font-semibold text-gray-200 mb-14"
                >
                    Welcome to My Portfolio
                </motion.h2> */}

                {/* Animated Circle Component */}
                <div className="mb-6 relative z-10">
                    <AnimatedTextCircle />
                </div>

                {/* Social Icons */}
                <div className="mt-10 flex space-x-6 z-10">
                    <motion.a
                        href="https://linkedin.com/in/eljohn-agojo"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <FaLinkedin size={30} className="hover:text-gray-400 transition" />
                    </motion.a>
                    <motion.a
                        href="https://github.com/ejagojo"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    >
                        <FaGithub size={30} className="hover:text-gray-400 transition" />
                    </motion.a>
                </div>
                <div className="mt-14 z-10">
                    <ScrollIndicator />
                </div>
            </section>


            {/* Skills & Technical Tools Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="py-20 px-8 text-center"
            >
                <h2 className="text-4xl font-bold mb-12">Skills & Technical Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-300 text-lg">
                    {[
                        { title: "Languages", skills: "C++, Python, HTML/CSS, JavaScript, Java, PowerShell, SQL, GoLang (exposure)" },
                        { title: "Web Technologies", skills: "React.js, React Native, Next.js, Tailwind CSS" },
                        { title: "Technologies", skills: "Git, MongoDB, Docker, Firebase, AWS, NoSQL, MySQL" },
                        { title: "Developer Tools", skills: "GitHub, Figma, Railway, Jira, VS Code, Linux, ServiceNow" },
                    ].map((skillCategory, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="relative flex flex-col items-center cursor-pointer p-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-white">{skillCategory.title}</h3>
                            <p className="text-gray-100">{skillCategory.skills}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Professional Experience Section with Updated Details */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="py-20 px-8"
            >
                <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
                <div className="space-y-12">
                    {[
                        {
                            title: "Wayfair - IT Engineer (Co-op)",
                            details: [
                                "Boston, MA | Jan 2024 - Aug 2024",
                                "Developed an AI-powered Slack support bot using Slack Bolt framework and OpenAI’s GPT-4 Turbo model, reducing support response times by 40% and increasing ticket resolution efficiency.",
                                "Automated the deprovisioning of over 500 Chrome devices by creating PowerShell scripts with PSGSuite, reducing manual workload by 95% and saving over 100 hours of manual deprovision of devices.",
                                "Streamlined the allocation of user licenses by integrating Zoom API, improving accessibility for over 1,000 Zoom users and saving 20+ hours per week in manual assignments."
                            ],
                            image: "/Wayfair-Logo.webp"
                        },
                        {
                            title: "Cognizant - Generative AI Externship",
                            details: [
                                "Remote | Jun 2024 - Jul 2024",
                                "Developed a pre-trained image classifier for dog breed identification using Hugging Face models, achieving an accuracy of 92%, demonstrating proficiency in deep learning and transfer learning.",
                                "Collaborated with a team of peers and mentors, enhancing project outcomes and fostering a cooperative learning environment during the AI externship."
                            ],
                            image: "/Cognizant-Logo.png"
                        },
                        {
                            title: "StarterKitz - Freelance Developer",
                            details: [
                                "Remote | Jun 2024 - Aug 2024",
                                "Collaborated closely with the client to understand and implement their vision for the website, ensuring the platform met all specified requirements.",
                                "Developed the platform using React.js and Firebase, utilizing Firestore (NoSQL database) to store CookBook information and Firebase Storage for assets like videos and photos.",
                                "Worked alongside another freelancer using Git for version control, facilitating efficient collaboration and code management throughout the project."
                            ],
                            image: "/starter-kitz.png"
                        }
                    ].map((experience, index) => (
                        <Tooltip key={index} text={`Details about ${experience.title}`}>
                            <motion.div
                                className="relative flex flex-col md:flex-row items-center gap-8 p-6 border rounded-lg shadow-lg bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 hover:scale-105 transition-transform duration-500"
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="border-4 border-white p-1 rounded-lg">
                                    <Image src={experience.image} alt={experience.title} width={300} height={200} className="rounded-lg" />
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
            </motion.section>

            {/* Projects Section with Enhanced Polaroid Me Feature */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="py-20 px-8"
            >
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <div className="space-y-12">
                    {[
                        {
                            title: "Hire Track",
                            details: [
                                "JavaScript, Chrome Extensions, Google Sheets API",
                                "Developed a Chrome extension to streamline job application tracking, allowing users to save and log job details efficiently.",
                                "Integrated Google Sheets API for logging job applications directly into a user’s Google Sheets, enabling easy tracking of job application history.",
                                "Automated tracking workflows to increase productivity, simplifying the job search and application process."
                            ],
                            image: "/assets/Hire-Track.png",
                            link: "https://github.com/ejagojo/hire-track"
                        },
                        {
                            title: "Polaroid Me",
                            details: [
                                "JavaScript, React.js, Spotify API, Tailwind CSS",
                                "Developed an interactive web app that generates personalized polaroid-style collages based on a user’s music taste and Spotify preferences.",
                                "Integrated the Spotify API to dynamically pull top tracks, artists, and genres, automating the collage generation process for a unique, user-centric output.",
                                "Visit Polaroid Me for a unique experience: "
                            ],
                            image: "/assets/polaroid-me.png",
                            link: "https://polaroid-me.vercel.app/"
                        }
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
                                    <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg" />
                                </div>
                                <div className="flex-1 text-lg text-gray-300">
                                    <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.details[0]}</p>
                                    <ul className="list-disc ml-6 space-y-2">
                                        {project.details.slice(1, -1).map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-400 mb-4">{project.details[3]} 
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                            Visit Polaroid Me
                                        </a>
                                    </p>
                                    <div className="mt-4">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                            GitHub Repository
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </Tooltip>
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

            {/* Footer */}
            <Footer />
        </div>
    );
}
