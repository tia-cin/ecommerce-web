import sanityClient from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import sanityCli from "../database-techvibe/sanity.cli";

export const client = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: process.env.API_VER,
  useCdn: true,
  token: process.env.TOKEN,
});
