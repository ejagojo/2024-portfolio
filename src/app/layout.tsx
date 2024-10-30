// src/app/layout.tsx

import React from "react";
import "../app/globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata = {
    title: "2024 Portfolio",
    description: "Eljohn's Portfolio Project",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
