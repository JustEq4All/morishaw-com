import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4321/graphql', token: '418628364d0f10d6d1a20c9c417c83d6ffb88c4f', queries,  });
export default client;
  