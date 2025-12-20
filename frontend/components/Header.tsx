import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight">
        Adhub
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/listings" className="text-gray-600 hover:text-blue-600 font-medium">
          Browse
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">
          Contact
        </Link>
      </nav>
    </header>
  );
}
