// src/app/components/ScrollIndicator.tsx

import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
    return (
        <div className="flex flex-col items-center mt-8">
            <p className="text-sm text-gray-400">Scroll Down</p>
            <motion.div
                className="w-4 h-4 mt-2 border-2 border-white rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
}
