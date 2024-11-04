"use client"; 

import AnimatedTextCircle from './components/AnimatedTextCircle';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaReact, FaPython, FaJs, FaDatabase } from 'react-icons/fa';

export default function HomePage() {
    return (
        <div className="relative bg-black text-white font-sans overflow-hidden min-h-screen">
            <div className="pt-28">
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
                </div>
            </section>
            </div>
        </div>
    );
}
