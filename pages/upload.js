import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import Link from 'next/link'

const Upload = () => {

  return(
  <>
    <Nav />
    <Head>
      <title>Upload</title>
    </Head>
    <div className="h-screen flex items-center px-6 lg:px-32 bg-black text-white">
      <section className="w-full flex justify-between ">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold uppercase text-white">
          Recognise Constellation
          </h1>
        </div>
        <div className="text-xl lg:text-3xl font-bold uppercase text-white">
          <p>
            Take a photo.
          </p>
          <p>
            Upload.
          </p>
          <p>
            Recognise the constellation.
          </p>
        </div>
      </section>
    </div>
  </>
  )
};

export default Upload;
