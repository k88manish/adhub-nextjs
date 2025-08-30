import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mb-8 flex justify-center">
      <input
        type="text"
        placeholder="Search billboards..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full max-w-xl px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
      />
    </div>
  );
}
