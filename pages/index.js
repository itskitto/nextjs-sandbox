import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs Sandbox</title>
        <meta name="description" content="Random Nextjs snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Nextjs Sandbox</h1>
      </main>
    </div>
  );
}
