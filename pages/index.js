import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bloom</title>
        <meta name="description" content="Restoring deicision-making security & patient privacy through data aggregation and decentralization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h2>The Bloom Network 🌸</h2>
    <p style={{ lineHeight: 'auto' }}>
    <u><Link href="/chain" passHref>
      Sign in with MetaMask
      </Link></u>
      </p>
    <p
    style={{ lineHeight: 'auto' }}
    >Restoring the power to the people. Ownership & control of medical data is not a privelage, it&#39;s our right.</p><br/>

<h3>The Vision</h3>
    <p style={{ lineHeight: '30px' }}>Medical data shouldn&#39;t be stored in 14 different databases across a community, it should be <b>decentralized and owned by the patients.</b> Medical specialists and ER Physicians should have access to the same fundamental data, which contributes to the idea of efficient and effective workflows. On the Bloom Network, data is decentralized at the discretion of patients, allowing them to publish their data in return for a token: $BLOOM. </p>
<br/>
    <h3>The pervasive paradigm of <i>normal</i></h3>
    <p style={{ lineHeight: '30px' }}>Where does this restoration even come from? In current systems, data is owned and distributed at the will of a hospital/clinic. When data needs to be sent, it is scattered and requires lots of communication to transform it to its final destination. This vision is to create a network that identifies necessary information, distributes it along a custom cryptographic protocol and then encrypts the data</p>
    <br/>
    <h3>Interacting with the chain</h3>
    <p style={{ lineHeight: '30px' }}>The chain lives on a lil&#39; server with functions to add and encrypt any information that is added. Information is sent to a custom API, that interacts with the web app. This dynamically adds new blocks to the chain, and consistently verifies its validity. While information cannot be removed, users can choose to remove their publicKeyt that encrypts the data. This means that data exists on-chain, but can only be accessed once approved.</p>
    <br/>
    - <Link href="https://heyrajan.com">rajan</Link>
    </div> 
  );
}