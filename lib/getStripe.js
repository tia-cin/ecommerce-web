import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LqFYzENi5vsUdl1S6DlnTj64Jppk67ktJiaASMWUwXgYyEGgZxtHtcdvDINlnNK537BxkTeoacuedDo8Hjpe8X600jUwt0g3d"
    );
  }

  return stripePromise;
};

export default getStripe;
