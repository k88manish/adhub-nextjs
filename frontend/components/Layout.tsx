import React from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen">
            {!isHomePage && <Header />}
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
