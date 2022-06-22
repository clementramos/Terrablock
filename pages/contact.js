import Contact from '../components/Contact';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head"
import ContainerBlock from '../components/ContainerBlock';


export default function Home({}) {
  return (
    <><Head>
      <link rel="shortcut icon" href="/logofooter.png" />
    </Head>
    <ContainerBlock
      title="Terrablock - NFT"
      description=""
    >
        <Contact />
      </ContainerBlock></>
  );
}

