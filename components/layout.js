import Link from "next/link";

import { Head } from "./head";
import styles from "./layout.module.css";

export function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Head />
      <header className={styles.header}>
        <h1>
          <Link href="/">
            <a>incomplet</a>
          </Link>
        </h1>
        <nav className={styles.nav}>
          <Link href="/about">
            <a>about</a>
          </Link>
          <Link href="/episodes">
            <a>episodes</a>
          </Link>
          {/* <Link href="/support">
            <a>support</a>
          </Link> */}
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      {/* <footer className={styles.footer}>[footer]</footer> */}
    </div>
  );
}
