
import React from 'react';
import listings from '../mockListings.json';
import ListingCard from '../components/ListingCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Book <span className="text-blue-600">Billboard</span> Ads Effortlessly
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Discover, book, and manage OOH advertising spaces with a modern, seamless experience. Powered by Adhub.
          </p>
          <a href="/listings" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition text-lg font-semibold">Browse Listings</a>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/mock/downtown.jpg" alt="Billboard" className="rounded-2xl shadow-2xl w-full max-w-md object-cover" />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Billboards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </section>
    </main>
  );
}
