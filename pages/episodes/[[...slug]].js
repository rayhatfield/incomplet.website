import Image from "next/image";
import dateFormat from "date-format";

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

const Scheduled = ({ episode: { scheduled_for: date } }) =>
  !date ? null : (
    <span>Episode Coming {dateFormat("yyyy-MM-dd", new Date(date))}</span>
  );

const Published = ({ episode: { id } }) => <Player episodeId={id} />;

const EpisodeTokens = ({ episode }) => {
  return (
    <ul className={style.tokens}>
      {episode?.status === "scheduled" && (
        <li>
          <Scheduled episode={episode} />
        </li>
      )}
      {episode?.status === "draft" && (
        <li>
          <span>Draft</span>
        </li>
      )}
    </ul>
  );
};

const Header = ({ episode, episode: { title, status } }) => {
  const published = status === "published" || status === "draft"; // showing drafts temporarily
  return (
    <header>
      {published && <Published episode={episode} />}
      <h1>{title}</h1>
      <EpisodeTokens episode={episode} />
    </header>
  );
};

const Ep = ({ episode, episode: { image_url, long_description } }) => {
  return (
    <article className={style.main}>
      <Header episode={episode} />
      <div dangerouslySetInnerHTML={{ __html: long_description }} />
    </article>
  );
};

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
