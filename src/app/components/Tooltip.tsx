// Tooltip.tsx
import React, { ReactNode } from 'react';

interface TooltipProps {
    text: string;
    children?: ReactNode; // children is optional now
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    return (
        <div className="relative group">
            {children}
            <span className="absolute z-10 p-2 text-sm text-white bg-gray-800 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {text}
            </span>
        </div>
    );
};
