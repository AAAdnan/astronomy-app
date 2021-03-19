import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import { useState } from 'react';
import Link from 'next/link'

const Geolocation = () => {

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          }, () => {
            setStatus('Unable to retrieve your location');
          });
        }
      }

  return(
  <>
    <Nav />
    <Head>
      <title>Geolocation</title>
    </Head>
    <div className="h-screen flex items-center px-6 lg:px-32 bg-black text-white">
      <section className="w-full flex justify-between ">
        <div>
        <button onClick={getLocation}>
          <h1 className="text-3xl lg:text-5xl font-bold uppercase text-white">
            Find Me
          </h1>
        </button>
        </div>
        <div className="text-xl lg:text-3xl font-bold uppercase text-white">   
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
        </div>
      </section>
    </div>
  </>
  )
};

export default Geolocation;
