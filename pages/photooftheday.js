import React, { Component } from 'react'
import ReactPlayer from "react-player"
import Head from 'next/head'
import Nav from '../components/Nav'
import fetch from 'isomorphic-unfetch'
import Image from 'next/image'
import { motion } from 'framer-motion';


function getPhotoOfTheDay(props) {

    return(
        <>
        <Nav />
        <Head>
            <title>Photo of the day</title>
        </Head>
        <motion.div className="h-screen flex md:items-center text-white overflow-hidden p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
        >
            <section className="w-full flex flex-col items-center pb-24">
                <div className="text-lg md:text-3xl font-bold uppercase text-red-200 mb-8 text-center">
                    {props.title}
                </div>
                {<div className="mb-8">
                    {props.type === 'youtube' ? <ReactPlayer url={props.imageUrl}  /> : <Image width={450} height={300} src={props.imageUrl} />}
                </div> }
                <div >
                <h1 className="text-sm lg:text-base font-bold text-white text-center">
                    {props.explanation}
                </h1>
                </div>
            </section>
        </motion.div>
        </>
    )

}

export async function getStaticProps() {
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

    const data = await res.json()

    return {
        props: {
            title: data.title,
            imageUrl: data.url,
            explanation: data.explanation,
            url: data.url,
            type: data.url.includes("youtube") ? 'youtube' : 'image'
        }
    }
}

export default getPhotoOfTheDay;