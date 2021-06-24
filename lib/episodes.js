import axios from "axios";

import { API_BASE_URL, API_BEARER_TOKEN } from "./constants";

const ax = axios.create({
  headers: {
    Authorization: `Bearer ${API_BEARER_TOKEN}`,
  },
});

export async function getEpisodes() {
  async function fetchEps() {
    const response = await ax.get(
      `${API_BASE_URL}episodes?limit=300&sort=number`
    );
    const {
      data: { collection: episodes },
    } = response;
    return episodes;
  }

  return (getEpisodes.p = getEpisodes.p || fetchEps());
}

export async function getLatestEpisode() {
  const eps = await getEpisodes();
  return eps[eps.length - 1];
}

export async function getEpisode(slug) {
  const ep = await getEpisodes().then((eps) =>
    eps.find((e) => e.slug === slug)
  );
  return await ax.get(ep.href).then((r) => ({ ...r.data }));
}
