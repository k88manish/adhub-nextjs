import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';

export default function HeroSearchBar() {
    const router = useRouter();
    const [location, setLocation] = useState('');
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [startDate, endDate] = dateRange;
    const [mediaType, setMediaType] = useState('Digital billboard');

    const handleSearch = () => {
        router.push({
            pathname: '/listings',
            query: {
                search: location,
                startDate: startDate ? startDate.toISOString() : undefined,
                endDate: endDate ? endDate.toISOString() : undefined,
                type: mediaType,
            },
        });
    };

    return (
        <div className="bg-white rounded-full shadow-xl flex items-center p-2 max-w-4xl w-full border border-gray-200">
            {/* Where Section */}
            <div className="flex-1 px-6 py-2 relative hover:bg-gray-100 rounded-full transition cursor-pointer group">
                <label className="block text-xs font-bold text-gray-800 mb-0.5 ml-1">Where</label>
                <input
                    type="text"
                    placeholder="Search destinations"
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-gray-600 placeholder-gray-400 text-sm leading-5"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-300 mx-2"></div>

            {/* When Section */}
            {/* <div className="flex-1 px-6 py-2 relative hover:bg-gray-100 rounded-full transition cursor-pointer group">
                <label className="block text-xs font-bold text-gray-800 mb-0.5 ml-1">When</label>
                <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    placeholderText="Add dates"
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-gray-600 placeholder-gray-400 text-sm leading-5 cursor-pointer"
                    dateFormat="MMM d"
                    formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
                />
            </div> */}

            {/* Divider */}
            {/* <div className="w-px h-8 bg-gray-300 mx-2"></div> */}

            {/* Media Type Section */}
            <div className="flex-1 px-6 py-2 relative hover:bg-gray-100 rounded-full transition cursor-pointer group">
                <label className="block text-xs font-bold text-gray-800 mb-0.5 ml-1">Media Type</label>
                <select
                    value={mediaType}
                    onChange={(e) => setMediaType(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-gray-600 text-sm leading-5 appearance-none cursor-pointer"
                >
                    <option value="Digital billboard">Digital billboard</option>
                    <option value="Moving media">Moving media</option>
                    <option value="Online Ads">Online Ads</option>
                </select>
            </div>

            {/* Search Button */}
            <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-md transition-transform transform active:scale-95 flex items-center justify-center ml-2"
                aria-label="Search"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </button>
        </div>
    );
}
