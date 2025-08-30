


import React, { useState, useEffect, useRef } from 'react';
import ListingCard from '../../components/ListingCard';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { fetchWooProducts } from '../../utils/fetchProducts';
import { useRouter } from 'next/router';

function mapProductsToListing(products: any[]) {
  return products.map((product) => ({
    id: product.id,
    title: product.name,
    description: product.description,
    location: product.attributes?.find((attr: any) => attr.name === 'Location')?.options[0] || 'Unknown',
    price_per_day: product.price,
    image_url: product.images?.[0]?.src || '',
  }));
}

export async function getServerSideProps(context) {
  const { query } = context;
  const search = query.search || '';
  const products = await fetchWooProducts(search);
  const listings = mapProductsToListing(products);
  return {
    props: {
      listings,
      search,
    },
  };
}


export default function Listings({ listings, search }: { listings: any[]; search: string }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(search || '');
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setInputValue(search || '');
  }, [search]);

  function handleInputChange(val: string) {
    setInputValue(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      router.push({
        pathname: '/listings',
        query: val ? { search: val } : {},
      });
    }, 400);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">All Billboard Listings</h2>
        <SearchBar value={inputValue} onChange={handleInputChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {listings.length > 0 ? (
            listings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg py-10">No listings found.</div>
          )}
        </div>
      </div>
    </main>
  );
}
