import { Redirect } from "../../components/redirect.jsx";
import { getFirstEpisode, getSeasons } from "../../lib/episodes.js";

export default function Season({ season, episode }) {
  return <Redirect to={`/episodes/${episode?.slug}`} />;
  // return <h1>Season {season} Episode {episode?.slug}</h1>
}

export async function getStaticPaths() {
  const seasons = await getSeasons();
  const paths = seasons.map(({ number }) => ({
    params: {
      season: "" + number,
    },
  }));

  //   const root = { params: { slug: false } };

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { season } }) {
  const episode = (await getFirstEpisode({ season })) ?? null;
  return {
    props: {
      season,
      episode,
    },
  };
}
