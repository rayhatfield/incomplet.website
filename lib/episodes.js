import axios from "axios";

import { API_BASE_URL, API_BEARER_TOKEN } from "./constants";

const ax = axios.create({
  headers: {
    Authorization: `Bearer ${API_BEARER_TOKEN}`,
  },
});

export async function getPodcastInfo() {
  return (await ax.get(API_BASE_URL)).data;
}

export async function getEpisodes() {
  async function fetchEps() {
    const response = await ax.get(
      `${API_BASE_URL}episodes?limit=300&sort=number`
    );
    const {
      data: { collection: episodes },
    } = response;
    return episodes?.filter?.((ep) =>
      // ["draft", "published", "scheduled"].includes(ep.status)
      ["published", "scheduled"].includes(ep.status)
    );
  }

  return (getEpisodes.p = getEpisodes.p || fetchEps());
}

const published = (ep) => ep?.status === "published";

export async function getLatestEpisode(filter = published) {
  const eps = (await getEpisodes()).filter(filter);
  return eps.length ? eps[eps.length - 1] : null;
}

export async function getEpisode(slug) {
  const ep = await getEpisodes().then((eps) =>
    eps.find((e) => e.slug === slug)
  );
  return await ax.get(ep.href).then((r) => ({ ...r.data }));
}
