import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51LqFYzENi5vsUdl188ugvsytoeQVvq0XPQKyLEZFQMzb1Dkw7uKiR3QzkEv3eoKYiu8L7KiVtBD86HFyTuqumADF00Ru0Gfppi"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1LqFncENi5vsUdl1pWAg66yP" },
          { shipping_rate: "shr_1LqFqLENi5vsUdl1jViTk1Xs" },
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImg = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/lhqznqop/production/"
            )
            .replace("-webp", ".webp");
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImg],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
