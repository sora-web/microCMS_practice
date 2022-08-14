import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "studio-yuto",
  apiKey: process.env.API_KEY,
});
