import Stripe from "stripe";
import { NextResponse} from "next/server";

export async function POST (request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: process.env.STRIPE_PRODUCT_PRICE_ID,
                quantity: 1,
            }
        ],
      mode: 'payment',
      success_url: 'http://localhost:3000/profile',
      cancel_url: 'http://localhost:3000/chat'
    })

    return NextResponse.json(session.url)
}