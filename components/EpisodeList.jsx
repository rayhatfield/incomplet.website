import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { API_BASE_URL } from "../lib/constants";
import { getEpisodes } from "../lib/episodes";

import styles from "./EpisodeList.module.css";

const MENU = "menu";

function Episode({ episode: { title, slug, status } = {}, active }) {
  const className = clsx(styles.episode, { [styles.active]: active });
  const inner = (
    <>
      <span className={styles.title}>{title}</span>
      {status !== "published" && (
        <span className={styles.tag}>Coming Soon</span>
      )}
    </>
  );

  return active ? (
    <label htmlFor={MENU} className={className}>
      {inner}
    </label>
  ) : (
    <Link href={`/episodes/${slug}`} className={className}>
      {inner}
    </Link>
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
