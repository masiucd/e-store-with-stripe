import { loadStripe } from "@stripe/stripe-js"

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY || "")
const stripePromise = loadStripe(
  `pk_test_51IJMQbCYzbrCXwtl1ezU8lYb6Coqhnfheo3p5KRvWN0Y1h03ksaNKJwpX3tUwSbufE6gAQYI9z5HiPcwOpmHcRKG00UJgPrla5`
)

export async function initializeCheckout({ lineItems }: any = {}): Promise<void> {
  const stripe = await stripePromise

  await stripe?.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin + "/products",
  })
}
