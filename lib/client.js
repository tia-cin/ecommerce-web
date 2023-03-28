import sanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "wrbpjeis",
  dataset: "production",
  apiVersion: "2022-10-06",
  useCdn: true,
  token:
    "skD3vfgXQkWdupOFt66WMFef9BMTwkFvYz1AITstsVoIyaGWr7FQRSbsKnyV17wRTuhsl4g8Etdnm8E1XmJm6NBAt0PL0TfSMvhwrjFWmRt4K8ZzKKXdUwLCy7Nxmmye1q3eHri8gUsJUd0zo1QavI1Ysy5cwDrHlqRJRRkWo2NJ1Kl3ofU5",
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
