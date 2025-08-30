import { Router } from 'express';
const router = Router();

// POST /checkout → create Stripe Checkout session
router.post('/', async (req, res) => {
  // TODO: Integrate Stripe Checkout
  res.json({ url: 'stripe-checkout-url' });
});

export default router;
