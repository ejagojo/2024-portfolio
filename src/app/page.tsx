// src/app/page.tsx

"use client"; // Ensures this main component runs on the client

import React from 'react';
import AnimatedTextCircle from './components/AnimatedTextCircle';
import ScrollIndicator from './components/ScrollIndicator';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function HomePage() {
    return (
        <div className="bg-black text-white font-sans">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-screen" style={{ marginTop: '-50px' }}>
                <AnimatedTextCircle />
                <div className="mt-6 flex space-x-4">
                    <a href="https://linkedin.com/in/eljohn-agojo" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} className="hover:text-gray-400 transition" />
                    </a>
                    <a href="https://github.com/ejagojo" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} className="hover:text-gray-400 transition" />
                    </a>
                </div>
                <ScrollIndicator />
            </section>

            {/* Professional Experience Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="py-20 px-8 text-center"
            >
                <h2 className="text-4xl font-bold mb-8">Professional Experience</h2>
                <div className="mt-8 space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Wayfair */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 border border-gray-700 rounded-lg shadow-lg flex flex-col items-center"
                    >
                        <div className="flex justify-center items-center mb-4">
                            <Image src="/Wayfair-Logo.webp" alt="Wayfair" width={100} height={100} className="rounded" />
                        </div>
                        <h3 className="text-2xl font-semibold mt-4">Wayfair - IT Engineer (Co-op)</h3>
                        <p className="text-gray-400">Boston, MA | Jan 2024 - Aug 2024</p>
                        <ul className="mt-2 text-sm leading-relaxed list-disc list-inside text-left">
                            <li>Developed an AI-powered Slack support bot using OpenAI’s GPT-4, reducing response times by <strong>40%</strong>.</li>
                            <li>Automated the deprovisioning of over <strong>500</strong> Chrome devices using PowerShell, saving <strong>100+</strong> hours.</li>
                            <li>Integrated Zoom API, improving accessibility for over <strong>1,000</strong> users and saving <strong>20+ hours</strong> weekly.</li>
                        </ul>
                    </motion.div>
                    
                    {/* Cognizant */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 border border-gray-700 rounded-lg shadow-lg flex flex-col items-center"
                    >
                        <div className="flex justify-center items-center mb-4">
                            <Image src="/Cognizant-Logo.png" alt="Cognizant" width={100} height={100} className="rounded" />
                        </div>
                        <h3 className="text-2xl font-semibold mt-4">Cognizant - Generative AI Externship</h3>
                        <p className="text-gray-400">Remote | Jun 2024 - Jul 2024</p>
                        <ul className="mt-2 text-sm leading-relaxed list-disc list-inside text-left">
                            <li>Developed a pre-trained image classifier for dog breed identification using Hugging Face models, achieving an accuracy of <strong>92%</strong>.</li>
                            <li>Collaborated in a team-driven AI externship, enhancing project results through cooperative learning.</li>
                        </ul>
                    </motion.div>

                    {/* StarterKitz */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 border border-gray-700 rounded-lg shadow-lg flex flex-col items-center"
                    >
                        <div className="flex justify-center items-center mb-4">
                            <Image src="/StarterKitz-Logo.webp" alt="StarterKitz" width={100} height={100} className="rounded" />
                        </div>
                        <h3 className="text-2xl font-semibold mt-4">StarterKitz - Freelance Developer</h3>
                        <p className="text-gray-400">Remote | Jun 2024 - Aug 2024</p>
                        <ul className="mt-2 text-sm leading-relaxed list-disc list-inside text-left">
                            <li>Built a chef-focused platform using React.js and Firebase, featuring real-time content management.</li>
                            <li>Utilized Git for efficient collaboration, ensuring consistent project vision and seamless performance across devices.</li>
                        </ul>
                    </motion.div>
                </div>
                <ScrollIndicator />
            </motion.section>

            {/* Projects Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="py-20 px-8 text-center"
            >
                <h2 className="text-4xl font-bold mb-8">Projects</h2>
                <div className="grid gap-8 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Hire Track Project */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 border border-gray-700 rounded-lg shadow-lg"
                    >
                        <video controls className="w-full h-40 object-cover rounded mb-4">
                            <source src="/videos/hire-track-demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h3 className="text-2xl font-semibold mt-4">Hire Track</h3>
                        <p className="text-gray-400">JavaScript, Chrome Extensions, Google Sheets API</p>
                        <ul className="mt-2 text-sm leading-relaxed list-disc list-inside text-left">
                            <li>Developed a Chrome extension to streamline job application tracking.</li>
                            <li>Integrated Google Sheets API for efficient application history management.</li>
                            <li>Automated workflows to simplify the job search process and improve productivity.</li>
                        </ul>
                        <div className="mt-4 flex justify-center">
                            <a href="https://github.com/ejagojo/hire-track" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">
                                GitHub Repository
                            </a>
                        </div>
                    </motion.div>

                    {/* Polaroid Me Project */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 border border-gray-700 rounded-lg shadow-lg"
                    >
                        <video controls className="w-full h-40 object-cover rounded mb-4">
                            <source src="/videos/polaroid-me-demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h3 className="text-2xl font-semibold mt-4">Polaroid Me</h3>
                        <p className="text-gray
-400">JavaScript, React.js, Spotify API, Tailwind CSS</p>
                        <ul className="mt-2 text-sm leading-relaxed list-disc list-inside text-left">
                            <li>Created an interactive app that generates Polaroid-style collages based on user music tastes.</li>
                            <li>Integrated Spotify API for dynamic, user-centered collage generation.</li>
                            <li>Automated the collage process for a unique, personalized experience.</li>
                        </ul>
                        <div className="mt-4 flex justify-center">
                            <a href="https://github.com/ejagojo/polaroid-me" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">
                                GitHub Repository
                            </a>
                        </div>
                    </motion.div>
                </div>
                <ScrollIndicator />
            </motion.section>
        </div>
    );
}
