import React from 'react';
import '../app/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
    title: '2024 Portfolio',
    description: "Eljohn's Portfolio Project",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
            </head>
            <body className="relative min-h-screen">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
