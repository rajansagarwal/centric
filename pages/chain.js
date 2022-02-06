import Head from "next/head";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
import './api/api.js';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://bloomnetwork-api.vercel.app/index.json');
  const data = await res.json();

  return { 
      props: { graph: data }
  }
}

export default function Home({ graph }) {
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>Datum Health</title>
        <meta name="description" content="Restoring deicision-making security & patient privacy through data aggregation and decentralization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h2>Welcome to The Bloom Network 🌸</h2>
    <p>Please ensure that you are on the Ethereum Mainnet.</p>

      {isAuthenticated ? (
        <>
          <button onClick={logout}>Logout</button>
          <p><b>Username:</b> {user.get("username")}</p>
          <p><b>Wallet Address:</b> {user.get("ethAddress")}</p><hr/>
          <div>
            {graph.map(graphical => (
                 <div key={graphical.index}>
                  <h3>Block: {graphical.index}</h3>
                  Current Hash: {graphical.hash}<br/><br/>
                  Previous Hash: {graphical.prev}<br/><br/>
                  Keywords: {graphical.graph.keywords}<br/><br/>
                  Validity: {graphical.graph.validity}<br/><br/>
                  Single-Use Identifier: {graphical.nonce}<br/><br/>
                  <u><Link href={`chain/${graphical.index}`}>View Details</Link></u><br/><br/>
                </div>
            ))}
        </div><br/><br/>
        </>
      ) : ( 
        <button
          onClick={() => {
            authenticate({ provider: "metamask" });
          }} 
          className={styles.button}
        >
          Sign in with MetaMask
        </button>
      )}
      <iframe src="//datum-api.vercel.app" height="700px" width="700px" frameBorder='0'/><br/><u><Link href="https://github.com/rajanwastaken/bloom/tree/main/ML-foundation">Wiew NLP Connections & Data Matrix</Link></u><br/><br/><br/><br/>
    </div> 
  );
}