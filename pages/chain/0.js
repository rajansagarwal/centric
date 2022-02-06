import Head from "next/head";
import { useMoralis } from "react-moralis";
import styles from "../../styles/Home.module.css";
import '../api/api.js';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://bloomnetwork-api.vercel.app/0.json');
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
        <title>Block 0 Details</title>
        <meta name="description" content="Restoring deicision-making security & patient privacy through data aggregation and decentralization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h2>Block 0 Details</h2>
    <p>Only Visible when Signed In.</p>

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
                  The genesis block cannot be revoked. Detail & ownership applies to all following index.
                </div>
            ))}
        </div>
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
    </div> 
  );
}