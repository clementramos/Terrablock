import Contact from '../components/Contact';
import Head from "next/head";
import ContainerBlock from '../components/ContainerBlock';
import Team from '../components/Team';

export default function Home({}) {
  return (
    <><Head>
      <link rel="shortcut icon" href="/logofooter.png" />
    </Head>
    <ContainerBlock
      title="Terrablock - NFT"
      description=""
    >
        <Team />
      </ContainerBlock></>
  );
}

