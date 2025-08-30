-- Users
table users {
  id uuid [pk, default: gen_random_uuid()]
  email text [unique, not null]
  name text
  created_at timestamp [default: now()]
}

-- Listings (OOH spaces)
table listings {
  id uuid [pk, default: gen_random_uuid()]
  title text [not null]
  description text
  location text
  price_per_day numeric
  image_url text
  created_at timestamp [default: now()]
}

-- Availability (per listing, per date)
table availability {
  id uuid [pk, default: gen_random_uuid()]
  listing_id uuid [ref: > listings.id]
  available_date date [not null]
  is_booked boolean [default: false]
}

-- Bookings
table bookings {
  id uuid [pk, default: gen_random_uuid()]
  user_id uuid [ref: > users.id]
  listing_id uuid [ref: > listings.id]
  start_date date [not null]
  end_date date [not null]
  status text [default: 'pending']
  created_at timestamp [default: now()]
}

-- Payments
table payments {
  id uuid [pk, default: gen_random_uuid()]
  booking_id uuid [ref: > bookings.id]
  stripe_payment_id text
  amount numeric
  status text [default: 'pending']
  created_at timestamp [default: now()]
}
