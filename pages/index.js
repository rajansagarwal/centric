import Head from "next/head";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h2>Datum Health</h2>

      {isAuthenticated ? (
        <>
          <button onClick={logout}>Logout</button>
          <h2>Welcome {user.get("username")}</h2>
          <h2>Your wallet address is {user.get("ethAddress")}</h2>
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