// src/app/components/AnimatedTextCircle.tsx

"use client"; // Ensures the component is treated as a client component

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedTextCircle() {
    // State to track client-side rendering
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set state to true after component mounts
        setIsClient(true);
    }, []);

    // Array of text segments to animate around the circle
    const circleText = [
        "SOFTWARE", "TECHNOLOGY", "ENGINEER", "DEVELOPMENT", 
        "TYPESCRIPT", "PYTHON", "JAVASCRIPT", "REACTJS"
    ];

    if (!isClient) return null; // Prevents rendering on server-side

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative flex items-center justify-center h-64 w-64"
        >
            {/* Title in the center */}
            <h1 className="absolute text-3xl font-bold text-white z-10">
                ELJOHN AGOJO
            </h1>

            {/* Rotating text container */}
            <AnimatePresence>
                <motion.div
                    className="relative w-full h-full rounded-full border border-white flex items-center justify-center"
                    initial={{ opacity: 0, x: '100vw' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, type: 'spring', stiffness: 80 }}
                >
                    {/* Rotating container for the circle text */}
                    <motion.div
                        className="absolute flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {/* Map each text segment around the circle path */}
                        {circleText.map((text, index) => (
                            <div
                                key={index}
                                className="absolute text-white text-lg font-semibold"
                                style={{
                                    transform: `rotate(${(index / circleText.length) * 360}deg) translate(0, -150px)`, // Adjusted translate for outer circle
                                    transformOrigin: 'center', // Ensures rotation around the center
                                }}
                            >
                                {text}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
