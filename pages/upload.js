import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import Link from 'next/link';
import ParticleComponentStar from '../components/ParticleComponentStar';


import ImageUploader from '../components/Image-Uploader';

const Upload = () => {

  return(
  <>
    <Nav />
    <Head>
      <title>Upload</title>
    </Head>
    <ParticleComponentStar />
    <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col justify-center align-center z-10">
      <div className="text-center bg-black text-6xl font-bold uppercase text-red-100 pb-8 pt-8">
        Upload Your Photo
      </div>
      <div className="container mx-auto flex justify-center text-white pt-12 ">
       <ImageUploader />
      </div>
    </div>
  </>
  )
};

export default Upload;
