import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight">
                        Adhub
                    </Link>
                    <p className="mt-4 text-gray-500 max-w-sm">
                        Book billboard ads effortlessly. Discover, book, and manage OOH advertising spaces with a modern, seamless experience.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li>
                            <a href="tel:0958956995" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                <span>📞</span> 0958956995
                            </a>
                        </li>
                        <li>
                            <a href="mailto:aiyada.adhum@gmail.com" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                <span>✉️</span> aiyada.adhum@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://line.me/ti/p/~0958956995" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                <span>💬</span> Line ID: 0958956995
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li>
                            <Link href="/listings" className="hover:text-blue-600 transition-colors">
                                Browse Listings
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-600 transition-colors">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Adhub. All rights reserved.
            </div>
        </footer>
    );
}
