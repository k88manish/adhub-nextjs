
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';

export default function ListingDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch product');
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="max-w-7xl mx-auto p-8">Loading...</div>;
  }

  if (error) {
    return <div className="max-w-7xl mx-auto p-8 text-red-600">{error}</div>;
  }

  if (!product) {
    return <div className="max-w-7xl mx-auto p-8">Listing not found.</div>;
  }

  const {
    name: title,
    description = '',
    price,
    images = [],
    attributes = [],
  } = product;

  const mainImage = images[0]?.src || '';
  const galleryImages = images.slice(1, 5);

  // Extract location from attributes
  let location = '';
  const locationAttr = attributes.find((attr: any) => attr.name.toLowerCase() === 'location');
  if (locationAttr) {
    location = locationAttr.options.join(', ');
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 pt-6">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <span className="font-semibold">★ 4.94</span>
              <span className="underline">· 277 Reviews</span>
            </span>
            <span className="underline">{location}</span>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span className="underline font-semibold">Share</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="underline font-semibold">Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mt-6">
        <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden h-[400px]">
          <div className="col-span-2 row-span-2">
            <img src={mainImage} alt={title} className="w-full h-full object-cover" />
          </div>
          {galleryImages.map((img: any, idx: number) => (
            <div key={idx} className={idx >= 2 ? 'relative' : ''}>
              <img src={img.src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
              {idx === 3 && (
                <button
                  onClick={() => setShowAllPhotos(true)}
                  className="absolute bottom-4 right-4 px-4 py-2 bg-white border border-gray-900 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
                >
                  <span>⋮⋮</span> Show all photos
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Title Section */}
            <div className="pb-8 border-b">
              <h2 className="text-2xl font-semibold mb-2">Billboard advertisement space in {location}</h2>
              <p className="text-gray-600">High traffic area · Premium visibility · Professional installation</p>
            </div>

            {/* Features Section */}
            <div className="py-8 border-b">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h3 className="font-semibold mb-1">Guest favorite</h3>
                    <p className="text-gray-600 text-sm">One of the most loved billboards on AdHub, according to advertisers</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">🔑</div>
                  <div>
                    <h3 className="font-semibold mb-1">Easy booking</h3>
                    <p className="text-gray-600 text-sm">Book your advertising space instantly online</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">🌆</div>
                  <div>
                    <h3 className="font-semibold mb-1">City view</h3>
                    <p className="text-gray-600 text-sm">Reach thousands of viewers during your stay</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">↩️</div>
                  <div>
                    <h3 className="font-semibold mb-1">Free cancellation for 24 hours</h3>
                    <p className="text-gray-600 text-sm">Get a full refund if you change your mind</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="py-8 border-b">
              <div
                className="text-gray-700 prose max-w-none"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>

            {/* Features/Amenities */}
            {attributes.length > 0 && (
              <div className="py-8 border-b">
                <h3 className="text-xl font-semibold mb-6">What this space offers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {attributes.map((attr: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-xl">✓</span>
                      <span>{attr.name}: {attr.options.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Calendar Section */}
            <div className="py-8 border-b">
              <h3 className="text-xl font-semibold mb-6">Select booking dates</h3>
              <div className="flex justify-center">
                <DatePicker
                  selected={startDate}
                  onChange={(dates: [Date | null, Date | null]) => {
                    const [start, end] = dates;
                    setStartDate(start);
                    setEndDate(end);
                  }}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                  monthsShown={2}
                  minDate={new Date()}
                  className="border-0"
                />
              </div>
              {startDate && endDate && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Selected: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Total days: {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))}
                  </p>
                </div>
              )}
            </div>

            {/* Location Section */}
            <div className="py-8">
              <h3 className="text-xl font-semibold mb-2">Where you'll be</h3>
              <p className="text-gray-700 mb-6">{location}</p>
              <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location)}&zoom=14`}
                  allowFullScreen
                />
              </div>
              <div className="mt-6">
                <p className="text-gray-700">
                  Welcome to {location}, a prime advertising location with high visibility and traffic.
                  This billboard offers excellent exposure for your brand in a centrally located area.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border rounded-xl shadow-xl p-6">
              <div className="mb-6">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl font-semibold">${price}</span>
                  <span className="text-gray-600">/ day</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">★ 4.94</span>
                  <span className="text-gray-600">· 277 Reviews</span>
                </div>
              </div>

              <div className="border rounded-lg mb-4">
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 border-r cursor-pointer hover:bg-gray-50">
                    <div className="text-xs font-semibold mb-1">CHECK-IN</div>
                    <div className="text-sm">
                      {startDate ? startDate.toLocaleDateString() : 'Add date'}
                    </div>
                  </div>
                  <div className="p-3 cursor-pointer hover:bg-gray-50">
                    <div className="text-xs font-semibold mb-1">CHECKOUT</div>
                    <div className="text-sm">
                      {endDate ? endDate.toLocaleDateString() : 'Add date'}
                    </div>
                  </div>
                </div>
                <div className="p-3 cursor-pointer hover:bg-gray-50">
                  <div className="text-xs font-semibold mb-1">GUESTS</div>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="text-sm border-0 outline-none w-full cursor-pointer bg-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {startDate && endDate && (
                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="underline">${price} x {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days</span>
                    <span>${(parseFloat(price) * Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Service fee</span>
                    <span>${(parseFloat(price) * Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${(parseFloat(price) * Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              )}

              <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition mb-4">
                Reserve
              </button>

              <p className="text-center text-sm text-gray-600 mb-4">You won't be charged yet</p>

              <div className="pt-4 border-t text-center">
                <button className="flex items-center gap-1 text-sm underline text-gray-600 mx-auto hover:text-gray-900">
                  <span>🚩</span> Report this listing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
