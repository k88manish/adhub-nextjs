

import React from 'react';
import listings from '../mockListings.json';
import ListingCard from '../components/ListingCard';
import HomePostCard from '../components/HomePostCard';
import HeroSearchBar from '../components/HeroSearchBar';
import { fetchWpPosts } from '../utils/fetchPosts';

function mapWpPostsToCards(posts: any[]) {
  return posts.map((post) => ({
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    image:
      post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
    link: post.link,
  }));
}

export async function getServerSideProps() {
  const posts = await fetchWpPosts();
  return { props: { posts } };
}

export default function Home({ posts }: { posts: any[] }) {
  const postCards = mapWpPostsToCards(posts || []);
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
          <div className="w-full max-w-2xl">
            <HeroSearchBar />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {postCards.map((post, i) => (
            <HomePostCard key={i} {...post} />
          ))}
        </div>
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
