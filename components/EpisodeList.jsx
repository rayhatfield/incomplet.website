import Image from "next/image";
import Link from "next/link";

import { API_BASE_URL } from "../lib/constants";
import { getEpisodes } from "../lib/episodes";

import styles from "./EpisodeList.module.css";

function Episode({
  episode: { title, image_url, slug } = {},
  className,
  ...other
}) {
  return (
    <Link href={`/episodes/${slug}`}>
      <a className={className}>
        <article {...other}>
          <div className={styles.thumbnail}>
            <Image src={image_url} width={180} height={180} objectFit="cover" />
          </div>
          <h1>{title}</h1>
        </article>
      </a>
    </Link>
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
