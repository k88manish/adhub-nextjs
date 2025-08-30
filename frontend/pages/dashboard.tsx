import React from 'react';

export default function Dashboard() {
  // TODO: Fetch user's bookings
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <p>No bookings yet.</p>
      </div>
    </div>
  );
}
