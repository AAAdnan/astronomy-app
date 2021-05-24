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
      <script>
        particleJS.load('particles-js, 'particles.json', function(){
            console.log('particles.json loaded...')
        })
      </script>
      <title>Home</title>
    </Head>
    <ParticleComponent />
    <div className="h-screen flex items-center px-6 lg:px-32 bg-black text-white">
    <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <ParticleComponent />
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    >
      <h1>Testing</h1>
      {/* You can render <Route> and <NavTabs /> here */}
    </div>
    </div>
      <Footer />
    </div>
  </>
  )
};

export default Particle;
