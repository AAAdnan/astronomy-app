import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import Link from 'next/link'
import ImageCard from '../components/ImageCard'
import { useQuery, useMutation, gql } from "@apollo/client"
import { useRef, useState, useEffect } from "react";



const Album = () => {

  const[images, setImages] = useState([]);

  const GET_PHOTOS = gql`
    query {
      queryPhoto {
        id
        date
        url
      }
    }
  `

  const { loading, error, data } = useQuery(GET_PHOTOS);

  if(data) {
    console.log(data.queryPhoto)
    // setImages(data.queryPhoto)

  }


  return(
  <>
    <Head>
      <title>Album</title>
    </Head>
    <Nav />
    <div className="h-screen flex items-center px-6 lg:px-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </div>
  </>
  )
};

export default Album;
