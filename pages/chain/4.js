import Head from "next/head";
import { useMoralis } from "react-moralis";
import styles from "../../styles/Home.module.css";
import '../api/api.js';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://bloomnetwork-api.vercel.app/4.json');
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
        <title>Block 4 Details</title>
        <meta name="description" content="Restoring deicision-making security & patient privacy through data aggregation and decentralization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h2>Block 4 Details</h2>
    <p>Ensure Metamask is installed.</p>

      {isAuthenticated ? (
        <>
          <button onClick={logout}>Logout</button>
          <p><b>Username:</b> {user.get("username")}</p>
          <p><b>Wallet Address:</b> {user.get("ethAddress")}</p><hr/>
          <br/>
          <h3>Scanned EHR</h3>
          <img src="https://bloomnetwork-api.vercel.app/fourth.png" width="500px"/>
          <br/><br/>
          <div>
            {graph.map(graphical => (
                <div key={graphical.index}>
                  <h3>Block: {graphical.index}</h3><br/>
                  Transfer: {graphical.transfer}<br/><br/>
                  Current Hash: {graphical.hash}<br/><br/>
                  Previous Hash: {graphical.prev}<br/><br/>
                  Keywords: {graphical.graph.keywords}<br/><br/>
                  Validity: {graphical.graph.validity}<br/><br/>
                  Single-Use Identifier: {graphical.nonce}<br/><br/>
                  Parsed Text: {graphical.text}<br/><br/>
                  AI Summarized Text: {graphical.summary}<br/><br/>
                </div>
            ))}
        </div>
        <details>
        <summary>Private Key</summary>
        <p>MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpQFcaH3nLWrcQ
6LRlXCUprUbNCGxILe5pOPyV45Rwvws15pV/e3JPFdQQQr0bd2+5zs2cb3fHieMI
iwp3bcmWOWFWTqiTQxVJRgvdaf3decg/odMYAMJg8dimSezyh9mvxyOF6a+5fhFc
fdg7MuoJ73z6ID4BOZDXhbjsNEE7GGJ8VbSdeJ9wekSwSBaCGdsgBzav9QF7fV/1
rNJSF/atMtZtz/1JvhhaqX9G4RSsbvQpiCtN1lHvFUwwxgwyuiEGUY14ntYeC2AE
QfLP+pLjkm/oOYyMb4ZjulmTLwhxhpPxcst3tsRHT0wakMcDqx/NS8J1oU5JVAB2
k8MPACHfAgMBAAECggEAFCls9tivCpF441PFQZnTd36Dw6LwOzz1fKVkOXrN0QyB
Cl+4iWIsQM2J4JICswXsUkcXaT5CF4wOdpMRoR57+CBHvx9Jp5lDLOJiQXMB4eNC
/omJev+EKEZHF7AQwOd8ABuJ2Mb4vvEMomb/XjX3eU2FJsq2eDDiVzo/yCuFZcOV
LDxwqRYHX3U1AvYfiwNuhvKQ7FlhJzw0YMvum9s0j0zR4csKHou39v5n+r00rEit
WkQZ8vpllmgrXzqLAPQV1jFJ/j3yRcXiqZZ+fYxSd4DsY5nL1P25lweyf3rgq1gw
Ww8e6zWeTC/OTIq8lfS3LGS5JYAOpkxWSuTCjAkJ4QKBgQDeZPJgKYm4oviNQFYS
dCU+UGlMfnNbLELZupnDzVUQV5urMf1P3o2WSL2ie4NoABS090W/2DSWh5X1bRmp
XMdCU/8l8LOwYLFj02PebLEojwSfeZxVk5wDPhOOYWroSnrVPlmW8y8nz1USOjmk
tYcozZ9JGDYQeyvpjj24qtglTwKBgQDC058cht0lhCJP2D/YZ7SekbytVf403W6L
LqLuQlUqyRneQL6DhnobeePDksMupBxIm/aIvUTZYbvxsG2EmCJ050Z+wyyMe7s6
rNhv36MABv2BD3sp1GjsFiormCkNOYtxd+1+z7wgOskv/qvDe8aauJYG+3cbXO3u
d/WWanc2cQKBgC5S0pWrMU+vSpyJgSQ44yUWtMhFMpwUHRyjHLJHS+eqh/dh40TG
s7FRF4cHuThpg+ap9vJeA54zQc4sWoMHm026l1P8zkD38xs7BftnooMzPyBEwYal
x4J5ZLNsoUsfcHSIlzq1DuZ47lxsmmMvmKasJfigvWozbdMpWLvlgj5LAoGAJeBI
bZ5WfgWrOgSbnPHEbpN8r+Io8pQd+pcNe+6PaisAiXHi1+Ub9h2DRzFQGtAy43bW
vgy1xuE2Ta10DTQadsnDrb85+PHRG34g8dbzdHznaeDdm+s8nrFMb388c+K9Fkkv
ddjjBQ0Isfj74Zw9pzS9jgvzQvGVHChcKWr3VDECgYEAxToGnlQvmzFhgEv5i3jO
DzQYA8kSx4y3UcNXbaH+VRMKozhayqSfYDD2gaRZruA3P9lajOEPgDy+PFgsaRm0
WDDXK2VP9ugQvJo4vlmhBazSnE17kbDbo1jCUKDItHDzXCgCzZ2awaogjP6KG9wU
926VR6W/t1oKuD9Z4gV8Sno=
<br/><br/>
<i>What does this do?</i> You can now use the private key to sign the EHR and send it to the blockchain. It is also used to revoke the sent EHR if you wish to.<br/><br/>
<button onClick={(send) => alert('Rquest Sent with Public Key and function `send`')}>Submit Revoke Request to Server</button>
</p>
       </details><br/>
        Public Key: MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqUBXGh95y1q3EOi0ZVwl
Ka1GzQhsSC3uaTj8leOUcL8LNeaVf3tyTxXUEEK9G3dvuc7NnG93x4njCIsKd23J
ljlhVk6ok0MVSUYL3Wn93XnIP6HTGADCYPHYpkns8ofZr8cjhemvuX4RXH3YOzLq
Ce98+iA+ATmQ14W47DRBOxhifFW0nXifcHpEsEgWghnbIAc2r/UBe31f9azSUhf2
rTLWbc/9Sb4YWql/RuEUrG70KYgrTdZR7xVMMMYMMrohBlGNeJ7WHgtgBEHyz/qS
45Jv6DmMjG+GY7pZky8IcYaT8XLLd7bER09MGpDHA6sfzUvCdaFOSVQAdpPDDwAh
3wIDAQAB<br/><br/>
       <br/>
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