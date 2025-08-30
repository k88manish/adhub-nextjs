import React from 'react';

export default function ListingDetail() {
  // TODO: Fetch listing + availability from backend
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="w-full h-64 bg-gray-200 rounded mb-4" />
        <h2 className="text-2xl font-bold mb-2">Billboard Title</h2>
        <p className="text-gray-700 mb-2">Location: City Center</p>
        <p className="text-blue-700 font-bold mb-4">$100/day</p>
        <div className="mb-4">Availability Calendar (coming soon)</div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book Now</button>
      </div>
    </div>
  );
}
