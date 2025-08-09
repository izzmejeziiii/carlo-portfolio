import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/reusable/header';

export const metadata: Metadata = {
    title: 'Carlo Encomio',
    description: 'Personal website'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="w-full flex flex-col items-center">
                <Header />
                {children}
            </body>
        </html>
    );
}
