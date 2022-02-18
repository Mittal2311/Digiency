import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header';
import Footer from './component/Footer';


export default function Home() {
  return (
   <>
   {/* <button className="btn-warning">Welcome</button> */}
   {/* Header section start  */}
   <Header/>
   {/* Header section end  */}

   {/* footer section satrt  */}

    <Footer/>
    {/* footer section end  */}
   

   </>
  )
}
