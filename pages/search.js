import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import { getNasaPhotos } from '../lib/nasa'
import Link from 'next/link'
import SearchCard from '../components/SearchCard'
import ImageSearch from '../components/ImageSearch'
import { useQuery, useMutation, gql } from "@apollo/client"
import { useRef, useState, useEffect } from "react";
import image from 'next/image';

const Search = ({ items }) => {
    const [photos, setPhotos] = useState(items);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    console.log(items)

    const handleSubmit = async (e) => {
        await e.preventDefault();
        if (query == "") {
         console.log('nothing searched for')
        } else {
          const res = await getNasaPhotos(query);
          await setPhotos(res);
          await setQuery("");
        }
      };

    return (
        <>
        <Nav />
        <Head>
            <title>Search</title>
        </Head>
        <div className="min-h-screen bg-black overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center text-6xl font-bold uppercase text-white pb-8 pt-8">
                    Photo Search
                </div>
                <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
                    <form onSubmit={handleSubmit} className="w-full max-w-sm">
                        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                        <input value={query} onChange={(e) => setQuery(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
                        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                            Search
                        </button>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-3 gap-4">
                {photos &&
                    photos.map((preview) => (
                <SearchCard
                  key={preview.data[0].nasa_id}
                  date={preview.data[0].date_created}
                  thumbnailUrl={preview.links[0].href}
                  nasaId={preview.data[0].nasa_id}
                  description={preview.data[0].description}
                  location={preview.data[0].location}
                 />
                ))}
                </div>
            </div>
        </div>
        </>
    );
}

export async function getStaticProps() {
    const results = await fetch(
      "https://images-api.nasa.gov/search?media_type=image"
    );
    const previews = await results.json();
    const items = await previews.collection.items;

    return {
      props: { items },
    };
  }

export default Search;
