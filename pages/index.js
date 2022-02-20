import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header></Header>
      </div>
      <div>
        <Footer></Footer> 
      </div>
    </div>
  );
}
