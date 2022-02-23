import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./Footer";
import NavComp from "./NavComp";
import Final from "./Final";
import { Navbar } from "react-bootstrap";
import Header from "./Header";
import Secoundcomp from "./Secoundcomp";
import ThirdComp from "./ThirdComp";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <NavComp></NavComp>
      </div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Secoundcomp></Secoundcomp>
      </div>
      <div>
        <ThirdComp />
      </div>
      {/* <div>
        <Final></Final>
      </div> */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
