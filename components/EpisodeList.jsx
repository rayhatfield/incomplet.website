import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { API_BASE_URL } from "../lib/constants";
import { getEpisodes } from "../lib/episodes";

import styles from "./EpisodeList.module.css";

const MENU = "menu";

function Episode({
  episode: { title, image_url, slug, status } = {},
  active,
  ...other
}) {
  const Cmp = active
    ? (props) => <label htmlFor={MENU} {...props} />
    : (props) => <Link href={`/episodes/${slug}`} {...props} />;
  return (
    <Cmp>
      <a className={clsx(styles.episode, { [styles.active]: active })}>
        <span className={styles.title}>{title}</span>
        {status !== "published" && (
          <span className={styles.tag}>Coming Soon</span>
        )}
      </a>
    </Cmp>
  );
}

export default function Episodes({ episodes, active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className={styles.container}>
      <input
        type="checkbox"
        id={MENU}
        checked={menuOpen}
        onChange={(e) => setMenuOpen(e.target.checked)}
      />
      <ol className={styles.list}>
        {!active?.id && (
          <li className={clsx(styles.active, styles.menuTitle)}>
            <Episode
              active
              episode={{ title: "Episodes", status: "published" }}
            />
          </li>
        )}
        {episodes.map((ep) => {
          const isActive = ep.id === active?.id;
          return (
            <li
              key={ep.title}
              className={clsx({ [styles.active]: isActive })}
              onClick={closeMenu}
            >
              <Episode episode={ep} active={isActive} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
