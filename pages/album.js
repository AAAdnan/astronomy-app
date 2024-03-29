import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import Link from 'next/link'
import ImageCard from '../components/ImageCard'
import { useQuery, useMutation, gql } from "@apollo/client"
import { useRef, useState, useEffect } from "react";


const Album = () => {

  const GET_PHOTOS = gql`
    query {
      queryPhoto {
        id
        date
        url
        user {
          username
        }
      }
    }
  `

  const { loading, error, data } = useQuery(GET_PHOTOS);

  if(data) {
    console.log(data)
  }

  return(
  <>
    <Nav />
    <Head>
      <title>Album</title>
    </Head>
    <div className="h-screen">
    <div className="text-center bg-black text-6xl font-bold uppercase text-red-100 pb-8 pt-8">
      Album
    </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
        { data ? 
          data.queryPhoto.map(image => (
            <ImageCard date={image.date} image={image.url} id={image.id} user={image.user} />
            ))
            :
            <p className="text-white">No Saved Images</p>
          }
          </div>
      </div>
      </div>
  </>
  )
};

export default Album;
