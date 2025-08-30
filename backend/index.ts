import express from 'express';
import listingsRouter from './routes/listings';
import bookingsRouter from './routes/bookings';
import checkoutRouter from './routes/checkout';
import webhookRouter from './routes/webhook';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/listings', listingsRouter);
app.use('/bookings', bookingsRouter);
app.use('/checkout', checkoutRouter);
app.use('/webhook', webhookRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
