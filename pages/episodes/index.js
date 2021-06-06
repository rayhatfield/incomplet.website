import Image from "next/image";

import styles from "./episodes.module.css";

function Episode({ episode: { title, image }, ...other }) {
  return (
    <article {...other}>
      <div className={styles.thumbnail}>
        <Image src={image} width={180} height={180} objectFit="cover" />
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
  return {
    props: {
      episodes: Array.from({ length: 12 }, (_, i) => ({
        title: `S1E${i + 1}: Episode ${i + 1}`,
        image: "/images/mandy.jpg"
      }))
    }
  };
}
