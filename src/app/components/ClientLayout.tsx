// src/app/components/ClientLayout.tsx

"use client"; // Mark as a client component

import React from "react";
import { motion } from "framer-motion";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto p-4"
        >
            {children}
        </motion.div>
    );
}
