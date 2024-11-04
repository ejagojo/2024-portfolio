"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "../components/Tooltip";

export default function About() {
    return (
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
    );
}
