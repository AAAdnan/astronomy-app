import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import Link from 'next/link'

import ImageUploader from '../components/Image-Uploader';

const Upload = () => {

  return(
  <>
    <Nav />
    <Head>
      <title>Upload</title>
    </Head>
    <div className="h-screen flex items-center px-6 lg:px-32 bg-black text-white">
      <section className="w-full flex justify-between ">
        <div className="flex items-center">
          <h1 className="text-3xl lg:text-5xl font-bold uppercase text-white">
          Recognise Constellation
          </h1>
          <button type="button" class="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-white hover:bg-blue-700 text-white hover:text-white font-normal py-2 px-4 rounded">Save to Album</button>
          <button type="button" class="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-white hover:bg-blue-700 text-white hover:text-white font-normal py-2 px-4 rounded">Identify</button>
        </div>
        <div className="pt-16">
          <ImageUploader />
        </div>
      </section>
    </div>
  </>
  )
};

export default Upload;
