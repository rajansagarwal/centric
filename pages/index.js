import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home({ graph }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Datum Health</title>
        <meta name="description" content="Restoring deicision-making security & patient privacy through data aggregation and decentralization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h2>Datum Health 🕊</h2>
    <p style={{ lineHeight: 'auto' }}>
      <Link href="/dashboard" passHref>
      <u>Sign in with MetaMask</u>
      </Link>
      </p>
    <p
    style={{ lineHeight: 'auto' }}
    >Restoring safety & security in medical decision making. A vision for true democracy in the medical field.</p><br/>

    <h3>The pervasive paradigm of <i>normal</i></h3>
    <p style={{ lineHeight: 'auto' }}>Restoring safety & security in medical decision making. A vision for true democracy in the medical field.</p>
    </div> 
  );
}