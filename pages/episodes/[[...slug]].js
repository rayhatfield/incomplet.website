import Image from "next/image";
import Head from "next/head";
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
  return (
    <article className={style.main}>
      <Head>
        <title>{title} : incomplet design history : S{p(season)}:E{p(number)}</title>
        <meta name="twitter:image" content={image_url} key="twitter:image"/>
        {description && <meta name="twitter:description" content={description} key="twitter:description"/>}
      </Head>
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
