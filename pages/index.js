import ContainerBlock from "../components/ContainerBlock";
import RoadMap from "../components/RoadMap";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Head from "next/head"


export default function Home({}) {
  return (
    <><Head>
      <link rel="shortcut icon" href="/logofooter.png" />
    </Head>
    <ContainerBlock
      title="Terrablock - NFT"
      description=""
    >
        <Hero />
        <RoadMap />
      </ContainerBlock></>
  );
}

