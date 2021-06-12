import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { API_BASE_URL } from "../lib/constants";
import { getEpisodes } from "../lib/episodes";

import styles from "./EpisodeList.module.css";

function Episode({
  episode: { title, image_url, slug } = {},
  active,
  ...other
}) {
  return (
    <Link href={`/episodes/${slug}`}>
      <a className={clsx(styles.episode, { [styles.active]: active })}>
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

export default function Episodes({ episodes, active }) {
  return (
    <ol className={styles.list}>
      {episodes.map((ep) => (
        <li key={ep.title}>
          <Episode episode={ep} active={ep.id === active?.id} />
        </li>
      ))}
    </ol>
  );
}
