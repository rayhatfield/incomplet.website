import Head from 'next/head';

import { Redirect } from "../components/redirect";
import { getLatestEpisode, getPodcastInfo } from "../lib/episodes";

export default function IndexPage({ podcast: {image_url} = {}, episode: { slug } = {} }) {
  const path = slug ? `/episodes/${slug}` : "/about";
  return (
    <>
      <Head>
        <meta name="twitter:image" content={image_url} key="twitter:image" />
      </Head>
      <Redirect to={path} />
    </>
  );
}

export async function getStaticProps() {
  const [podcast, episode] = await Promise.all([getPodcastInfo(), getLatestEpisode()]);
  const props = {
    podcast,
    episode
  }

  return {
    props,
  };
}
