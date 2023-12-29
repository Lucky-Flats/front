import React from 'react';
import { Unbounded } from 'next/font/google';
import '@/app/globals.css';

const unbounded = Unbounded({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={unbounded.className}>{children}</body>
        </html>
    );
}
