import Image from "next/image";

import { API_BASE_URL } from "../../lib/constants";
import { getEpisodes } from "../../lib/episodes";

import styles from "./episodes.module.css";

function Episode({ episode: { title, image_url }, ...other }) {
  return (
    <article {...other}>
      <div className={styles.thumbnail}>
        <img src={image_url} width={180} height={180} objectFit="cover" />
      </div>
      <h1>{title}</h1>
    </article>
  );
}

export default function Episodes({ episodes }) {
  return (
    <ol className={styles.list}>
      {episodes.map((ep) => (
        <li key={ep.title}>
          <Episode className={styles.episode} episode={ep} />
        </li>
      ))}
    </ol>
  );
}

export async function getServerSideProps(context) {
  const episodes = await getEpisodes();

  return {
    props: {
      episodes,
    },
  };
}
