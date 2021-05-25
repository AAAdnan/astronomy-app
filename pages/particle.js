import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import Link from 'next/link'
import Document, { HTML , Main, NextScript } from 'next/document'
import ParticleComponent from '../components/ParticleComponent'

const Particle = () => {

  return(
  <>
    <Nav />
    <Head>
      <title>Home</title>
    </Head>
    <div className="h-screen flex items-center px-6 lg:px-32 bg-black text-white">
    <ParticleComponent />
      <h1>Testing</h1>
    </div>
      <Footer />
  </>
  )
};

export default Particle;
