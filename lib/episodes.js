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

export async function getEpisodes(season) {
  async function fetchEps() {
    const response = await ax.get(
      `${API_BASE_URL}episodes?limit=300&sort=number_asc`
    );
    const {
      data: { collection: episodes },
    } = response;
    return episodes?.filter?.((ep) => {
      // console.log({seasonNum, eps: ep.season?.number});
      // ["draft", "published", "scheduled"].includes(ep.status)
      return ["published", "scheduled"].includes(ep.status);
    });
  }

  getEpisodes.p = getEpisodes.p || fetchEps();

  const seasonNum = season && parseInt(season);

  return getEpisodes.p.then((eps) =>
    !seasonNum ? eps : eps?.filter((ep) => ep.season?.number === seasonNum)
  );
}

export async function getFirstEpisode({ season }) {
  const eps = await getEpisodes(season);
  return eps?.[0];
}

const published = (ep) => ep?.status === "published";

export async function getLatestEpisode({ filter = published, season } = {}) {
  const eps = (await getEpisodes(season))
    .filter(filter)
    .sort(({ days_since_release: a }, { days_since_release: z }) => a - z);
  return eps.length ? eps[0] : null;
}

export async function getEpisode(slug) {
  const ep = await getEpisodes().then((eps) =>
    eps.find((e) => e.slug === slug)
  );
  return await ax.get(ep.href).then((r) => ({ ...r.data }));
}

export async function getSeasons() {
  async function fetchSeasons() {
    const response = await ax.get(`${API_BASE_URL}seasons`);
    const {
      data: { collection: seasons },
    } = response;
    return seasons.sort(({ number: a }, { number: z }) => a - z);
  }
  return (getSeasons.p = getSeasons.p || fetchSeasons());
}
