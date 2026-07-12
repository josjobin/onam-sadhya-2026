import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get('orderId');

  if (!orderId) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    const UNIT_PRICE_SEK = 470; // Ensure this matches your actual price
    const quantity = 1; // Replace with your DB fetch logic if customers order more than 1 box
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'klarna'],
      line_items: [
        {
          price_data: {
            currency: 'sek',
            product_data: {
              name: 'Onam Sadhya Box 2026',
              description: `Order ID: #${orderId}`,
            },
            unit_amount: UNIT_PRICE_SEK * 100, 
          },
          quantity: quantity,
        },
      ],
      client_reference_id: orderId,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?order=${orderId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    if (session.url) {
      return NextResponse.redirect(session.url);
    }

    return NextResponse.json({ error: 'Failed to create Stripe session' }, { status: 500 });
  } catch (err: any) {
    console.error("Stripe Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}