import React from 'react';

interface ListingDetailCardProps {
  title: string;
  description: string;
  location: string;
  price_per_day: number;
  image_url: string;
  gallery?: string[];
  attributes?: { name: string; options: string[] }[];
}

export default function ListingDetailCard({
  title,
  description,
  location,
  price_per_day,
  image_url,
  gallery = [],
  attributes = [],
}: ListingDetailCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="w-full h-80 bg-gray-100 flex items-center justify-center relative">
        <img src={image_url} alt={title} className="object-cover h-full w-full" />
        {gallery.length > 1 && (
          <div className="absolute bottom-2 right-2 flex gap-2">
            {gallery.map((img, i) => (
              <img key={i} src={img} alt="Gallery" className="w-12 h-12 object-cover rounded border border-white shadow" />
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">{title}</h2>
        <p className="text-blue-700 font-bold text-xl mb-2">${price_per_day}/day</p>
        <p className="text-gray-600 mb-4">{location}</p>
        <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: description }} />
        {attributes.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Features</h4>
            <ul className="flex flex-wrap gap-2">
              {attributes.map(attr => (
                <li key={attr.name} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {attr.name}: {attr.options.join(', ')}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mb-6">
          <span className="font-semibold">Availability Calendar (coming soon)</span>
        </div>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-lg font-semibold shadow">
          Book Now
        </button>
      </div>
    </div>
  );
}