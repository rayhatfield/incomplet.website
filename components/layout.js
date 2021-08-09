import Link from "next/link";
import Image from "next/image";

import { Head } from "./head";
import styles from "./layout.module.css";

export function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Head />
      <header className={styles.header}>
        <h1>
          {/* <Link href="/">
            <a>incomplet</a>
          </Link> */}
          <Link href="/">
            <div>
              <img
                src="/images/logo-w-tag.svg"
                alt="incomplet: a podcast about design history"
                className={styles["logo-main"]}
                // width={336}
                // height={336}
                // objectFit="cover"
              />
              <p className={styles.tagline}>a podcast about design history</p>
            </div>
          </Link>
        </h1>
        <nav className={styles.nav}>
          <Link href="/about">
            <a>about</a>
          </Link>
          <a href="mailto:hello@idh.fm">hello@idh.fm</a>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      {/* <footer className={styles.footer}>[footer]</footer> */}
    </div>
  );
}
