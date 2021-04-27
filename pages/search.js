import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import { getCuratedPhotos, getQueryPhotos } from '../lib/api'
import Link from 'next/link'
import SearchCard from '../components/SearchCard'
import ImageSearch from '../components/ImageSearch'
import { useQuery, useMutation, gql } from "@apollo/client"
import { useRef, useState, useEffect } from "react";
import image from 'next/image';

const Search = ({data}) => {
    const [photos, setPhotos] = useState(data);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    return (
        <>
        <Nav />
        <Head>
            <title>Search</title>
        </Head>
        <div className="min-h-screen bg-black overflow-hidden">
        <ImageSearch />
            <div className="container mx-auto">
                <div className="text-center text-6xl font-bold uppercase text-white pb-8 pt-8">
                    Photo Search
                </div>
                <div className="grid grid-cols-3 gap-4">
                {photos ? photos.map(photo => (
                    <SearchCard key={photo.id} alt={photo.url} image={photo.src.medium} />
                )
                )
                : <p>No images found</p>
                }
                </div>
            </div>
        </div>
        </>
    );
}

export async function getServerSideProps() {
    const data = await getCuratedPhotos();
    return {
      props: {
        data,
      },
    };
  }


export default Search;
