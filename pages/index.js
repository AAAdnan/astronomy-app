import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link';
import React from "react";
import { motion } from 'framer-motion';
import ParticleComponent from '../components/ParticleComponent'
import LandingPage from '../components/LandingPage'
import Sparkles from '../components/Sparkle';


const buttonVariants = {
  hover: {
    scale: 1.1,
    opacity: 1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
    }
  }
}

const Home = () => {

  return(
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
    <ParticleComponent className="relative"/>
    <div className="absolute top-3/4 md:top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 flex-col md:pt-8 md:flex items-center px-6 lg:px-32 text-white">
      <section className="w-full flex flex-col md:flex-row align-center md:justify-between md:mt-4">
        <div className="flex flex-col items-center">
            <h1 className="text-3xl lg:text-5xl font-bold uppercase text-red-100">
              <Sparkles>
                Topnomi
              </Sparkles>
            </h1>
            <Link href="/iss" >
              <motion.button className="bg-transparent text-white font-bold mt-6 mb-6 py-2 px-4 rounded-full"
                  variants={buttonVariants}
                  whileHover="hover"
              >
                    Near Me
              </motion.button>
            </Link>
            </div>
        <div className="flex-col md:flex-row justify-center text-xl lg:text-3xl font-bold uppercase text-white">
            <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="flex justify-center"
            >
            Take a photo.
            </motion.p>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="flex justify-center"
            >
            Upload.
            </motion.p>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="flex justify-center"
            >
            Create your own album
            </motion.p>
        </div>
      </section>
    </div>
  </>
  )
};

export default Home;

