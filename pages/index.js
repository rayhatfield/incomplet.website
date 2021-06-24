import { Redirect } from "../components/redirect";
import { getLatestEpisode } from "../lib/episodes";

export default function IndexPage({ episode: { slug } = {} }) {
  return <Redirect to={`/episodes/${slug}`} />;
}

export async function getStaticProps() {
  const episode = await getLatestEpisode();
  return {
    props: {
      episode,
    },
  };
}
