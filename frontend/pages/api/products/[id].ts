import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const WOO_URL = process.env.WOO_URL || 'https://adhubmarketplace.com/wp-json/wc/v3/products';
const WOO_KEY = process.env.WOO_KEY;
const WOO_SECRET = process.env.WOO_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const response = await axios.get(`${WOO_URL}/${id}`, {
      auth: {
        username: WOO_KEY,
        password: WOO_SECRET,
      },
    });

    res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error fetching product:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || 'Failed to fetch product',
    });
  }
}
