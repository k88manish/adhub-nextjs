import React from 'react';

interface ListingCardProps {
  title: string;
  description: string;
  location: string;
  price_per_day: number;
  image_url: string;
  id: string;
}

export default function ListingCard({ title, description, location, price_per_day, image_url, id }: ListingCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col">
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center">
        <img src={image_url} alt={title} className="object-cover h-full w-full" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-xl mb-1 text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">{location}</p>
        <p className="text-gray-700 text-sm flex-1 mb-3">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-blue-700 font-bold text-lg">${price_per_day}/day</span>
          <a href={`/listings/${id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold">View</a>
        </div>
      </div>
    </div>
  );
}
