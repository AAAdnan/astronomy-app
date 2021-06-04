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
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
    <ParticleComponent />
  </>
  )
};

export default Particle;
