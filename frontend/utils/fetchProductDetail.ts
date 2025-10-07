import axios from 'axios';

const WOO_URL = process.env.WOO_URL || 'https://adhubmarketplace.com/wp-json/wc/v3/products';
const WOO_KEY = process.env.WOO_KEY;
const WOO_SECRET = process.env.WOO_SECRET;

export async function fetchWooProductDetail(id: string) {
  const res = await axios.get(`${WOO_URL}/${id}`, {
    auth: {
      username: WOO_KEY,
      password: WOO_SECRET,
    },
    params: {
      // You can add extra params if needed
    },
  });
  return res.data;
}