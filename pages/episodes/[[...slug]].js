import Image from "next/image";

import { getEpisodes, getEpisode } from "../../lib/episodes";
import EpisodeList from "../../components/EpisodeList";

import style from "./episodes.module.css";

const Player = ({ episodeId }) => (
  <iframe
    height="200px"
    width="100%"
    frameBorder="no"
    scrolling="no"
    seamless
    src={`https://player.simplecast.com/${episodeId}?dark=false`}
  ></iframe>
);

const Ep = ({
  episode: { id, title, image_url, long_description, audio_file },
}) => (
  <article className={style.main}>
    <Player episodeId={id} />
    <div dangerouslySetInnerHTML={{ __html: long_description }} />
  </article>
);

export default function Episode({ episodes, episode }) {
  return (
    <section className={style.container}>
      <EpisodeList episodes={episodes} active={episode} />
      {episode && <Ep episode={episode} />}
    </section>
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
  const episodes = await getEpisodes();
  const episode = slug?.[0] ? await getEpisode(slug[0]) : null;
  return {
    props: {
      episodes,
      episode,
    },
  };
}
