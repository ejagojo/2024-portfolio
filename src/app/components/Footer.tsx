"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gray-900 text-gray-400 py-8 px-4 text-center w-full mt-auto"
        >
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-white">Connect with Me</h2>
                <p className="mt-2">Feel free to reach out through any of the platforms below!</p>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="https://linkedin.com/in/eljohn-agojo" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/ejagojo" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <FaGithub size={24} />
                </a>
                <a href="mailto:agojo.eljohn@gmail.com" className="hover:text-white">
                    <FaEnvelope size={24} />
                </a>
            </div>
            <p className="mt-6 text-sm">© {new Date().getFullYear()} Eljohn Agojo. All rights reserved.</p>
        </motion.footer>
    );
}
