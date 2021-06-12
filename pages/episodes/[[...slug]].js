import Image from "next/image";

import { getEpisodes, getEpisode } from "../../lib/episodes";

export default function Episode({
  episode: { title, image_url, long_description },
}) {
  return (
    <article>
      <h1>{title}</h1>
      <Image src={image_url} width={180} height={180} />
      <div dangerouslySetInnerHTML={{ __html: long_description }} />
    </article>
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
  return episode
    ? {
        props: {
          episode,
        },
      }
    : {
        notFound: true,
      };
}
