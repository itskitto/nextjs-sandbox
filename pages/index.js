import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs Sandbox</title>
        <meta name="description" content="Random Nextjs snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation />
      </main>
    </>
  );
}
