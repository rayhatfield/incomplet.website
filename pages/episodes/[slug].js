import Image from "next/image";

import { getEpisodes } from "../../lib/episodes";

export default function Episode({ episode: { title, image_url } }) {
  return (
    <article>
      <h1>{title}</h1>
      <Image src={image_url} width={180} height={180} />
    </article>
  );
}

export async function getStaticPaths() {
  const episodes = await getEpisodes();
  const paths = episodes.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const episodes = await getEpisodes();
  return {
    props: {
      episode: episodes.find((e) => e.slug === slug),
    },
  };
}
