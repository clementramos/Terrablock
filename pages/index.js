import ContainerBlock from "../components/ContainerBlock";
import RoadMap from "../components/RoadMap";
import Hero from "../components/Hero";
import Head from "next/head"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Home({}) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/logofooter.png" />
    </Head>
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion 
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'easeOut', duration: 2 }} // Set the transition to linear
      className="">
    <ContainerBlock
      title="Terrablock - NFT"
      description=""
    >
      <Hero />
      <RoadMap />
    </ContainerBlock>
    </motion.main></>
  );
}

