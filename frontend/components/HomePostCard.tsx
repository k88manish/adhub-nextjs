import React from 'react';

interface HomePostCardProps {
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

export default function HomePostCard({ title, excerpt, image, link }: HomePostCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover h-full w-full" />
        ) : (
          <div className="text-gray-400">No Image</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">{title}</h3>
        <div className="text-gray-600 text-sm line-clamp-3" dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
    </a>
  );
}
