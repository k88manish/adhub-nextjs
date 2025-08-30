import { Router } from 'express';
const router = Router();

// POST /bookings → create a booking (status = pending)
router.post('/', async (req, res) => {
  // TODO: Create booking in Supabase
  res.json({ status: 'pending' });
});

// GET /bookings/:id → fetch booking details
router.get('/:id', async (req, res) => {
  // TODO: Fetch booking details from Supabase
  res.json({});
});

export default router;
