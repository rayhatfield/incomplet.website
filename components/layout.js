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
            <img
              src="/images/logo-w-tag.svg"
              alt="incomplet: a podcast about design history"
              className={styles["logo-main"]}
            />
            <p className={styles.tagline}>a podcast about design history</p>
          </Link>
        </h1>
        <nav className={styles.nav}>
          <Link href="/about">about</Link>
          <a href="mailto:hello@idh.fm">hello@idh.fm</a>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      {/* <footer className={styles.footer}>[footer]</footer> */}
    </div>
  );
}
