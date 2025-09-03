import axios from 'axios';

const WP_URL = process.env.WP_URL || 'https://adhubmarketplace.com/wp-json/wp/v2/posts';

export async function fetchWpPosts() {
  const res = await axios.get(WP_URL, {
    params: {
      per_page: 6, // Show latest 6 posts
      _embed: true, // To get featured media
    },
  });
  return res.data;
}
