import axios from "axios";

import { API_BASE_URL, API_BEARER_TOKEN } from "./constants";

const ax = axios.create({
  headers: {
    Authorization: `Bearer ${API_BEARER_TOKEN}`,
  },
});

export async function getEpisodes() {
  const response = await ax.get(`${API_BASE_URL}episodes`);
  const {
    data: { collection: episodes },
  } = response;
  return episodes;
}
