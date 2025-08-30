import axios from 'axios';

const WOO_URL = process.env.WOO_URL!;
const WOO_KEY = process.env.WOO_KEY!;
const WOO_SECRET = process.env.WOO_SECRET!;

export async function fetchWooProducts(search?: string) {
  const res = await axios.get(WOO_URL, {
    auth: {
      username: WOO_KEY,
      password: WOO_SECRET,
    },
    params: {
      per_page: 20, // adjust as needed
      ...(search ? { search } : {}),
    },
  });
  return res.data;
}