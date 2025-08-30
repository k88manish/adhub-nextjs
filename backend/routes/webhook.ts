import { Router } from 'express';
const router = Router();

// POST /webhook → Stripe webhook → confirm payment + booking
router.post('/', async (req, res) => {
  // TODO: Handle Stripe webhook
  res.status(200).send('ok');
});

export default router;
