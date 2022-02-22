import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import Aboutus from "./component/Aboutus";

export default function Home() {
  return (
    <>
      {/* Header section start  */}
      <Header />
      {/* Header section end  */}

      {/* Banner section start  */}
        <Banner/>
      {/* Banner section end */}

      {/* About section start  */}

        <Aboutus/>
      {/* About section end  */}

      {/* footer section satrt  */}
      <Footer />
      {/* footer section end  */}
    </>
  );
}
