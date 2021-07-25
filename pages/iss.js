import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Map from '../components/Map'
import React from "react";
import { useState } from 'react';
import Link from 'next/link'
import Sparkles from '../components/Sparkle';

const Geolocation = () => {
  return(
  <>
    <Nav />
    <Head>
      <title>ISS Tracker</title>
    </Head>
    <div className="h-auto px-6 lg:px-32 bg-black text-white">
      <div className="text-center bg-black text-6xl font-bold uppercase text-red-100 pb-8 pt-8">
        <Sparkles >
          ISS Tracker
        </Sparkles>
      </div>
    <Map />     
    </div>
  </>
  )
};

export default Geolocation;
