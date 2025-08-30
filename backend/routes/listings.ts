import { Router } from 'express';
const router = Router();

// GET /listings → fetch all listings
router.get('/', async (req, res) => {
  // TODO: Fetch listings from Supabase
  res.json([]);
});

// GET /listings/:id/availability → fetch availability
router.get('/:id/availability', async (req, res) => {
  // TODO: Fetch availability for a listing from Supabase
  res.json([]);
});

export default router;
