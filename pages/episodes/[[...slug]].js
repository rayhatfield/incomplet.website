import Image from "next/image";
import Head from "next/head";

import { getEpisodes, getEpisode, getSeasons } from "../../lib/episodes";
import EpisodeList from "../../components/EpisodeList";

import style from "./episodes.module.css";
import SeasonsNav from "../../components/SeasonsNav.jsx";
import {EpisodeHeader} from "../../components/episodes/EpisodeHeader";

export const Player = ({ episodeId }) => (
  <iframe
    height="200px"
    width="100%"
    frameBorder="no"
    scrolling="no"
    seamless
    src={`https://player.simplecast.com/${episodeId}?dark=false`}
  ></iframe>
);

// pad season/episode number
const p = x => `${x}`.padStart(2, '0');

const Ep = ({
  episode,
  episode: {
    season: { number: season },
    number,
    title,
    image_url,
    description,
    long_description
  }
}) => {
  const seasonEpisode = `S${p(season)}:E${p(number)}`;
  return (
    <article className={style.main}>
      <Head>
        <title>{title} : incomplet design history : {seasonEpisode}</title>
        <meta name="twitter:title" content={`${title} : incomplet design history : ${seasonEpisode}`} key="twitter:title"/>
        <meta name="twitter:image" content={image_url} key="twitter:image"/>
        {description && <meta name="twitter:description" content={description} key="twitter:description"/>}
      </Head>
      <EpisodeHeader episode={episode} />
      <div dangerouslySetInnerHTML={{ __html: long_description }} />
    </article>
  );
};

function episodesForSeason (episodes, seasonNumber) {
  return episodes.filter(e => e.season?.number === seasonNumber);
}

export default function Episode({ episodes, episode, seasons }) {
  const { season: { number: episodeSeasonNumber } = {} } = episode || {};
  const seasonEpisodes = episodesForSeason(episodes, episodeSeasonNumber);
  return (
    <>
      <section className={style.container}>
        <SeasonsNav className={style.seasons} seasons={seasons} active={episode?.season?.number} />
        <EpisodeList episodes={seasonEpisodes} active={episode} />
        {episode && <Ep episode={episode} />}
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const episodes = await getEpisodes();
  const paths = episodes.map(({ slug }) => ({
    params: {
      slug: [slug],
    },
  }));

  const root = { params: { slug: false } };

  return {
    paths: [root, ...paths],
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const [episodes, seasons] = await Promise.all([getEpisodes(), getSeasons()]);
  const episode = slug?.[0] ? await getEpisode(slug[0]) : null;
  return {
    props: {
      seasons,
      episodes,
      episode,
    },
  };
}
