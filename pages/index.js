import { Redirect } from "../components/redirect";
import { getLatestEpisode } from "../lib/episodes";

export default function IndexPage({ episode: { slug } = {} }) {
  const path = slug ? `/episodes/${slug}` : "/about";
  return <Redirect to={path} />;
}

export async function getStaticProps() {
  const episode = await getLatestEpisode();
  const props = episode ? { episode } : {};
  return {
    props,
  };
}
