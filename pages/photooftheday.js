import React, { Component } from 'react'
import ReactPlayer from "react-player"
import Head from 'next/head'
import Nav from '../components/Nav'
import fetch from 'isomorphic-unfetch'
import Image from 'next/image'



function getPhotoOfTheDay(props) {

    return(
        <>
        <Nav />
        <Head>
            <title>Photo of the day</title>
        </Head>
        <div className="h-screen flex items-center px-6 lg:px-32 bg-black text-white overflow-hidden">
            <section className="w-full flex flex-col justify-center items-center mt-12 pb-24">
                <div className="text-3xl lg:text-3xl font-bold uppercase text-red-100 mb-8">
                    {props.title}
                </div>
                {<div className="mb-8">
                    {props.type === 'youtube' ? <ReactPlayer url={props.imageUrl}  /> : <Image width={450} height={300} src={props.imageUrl} />}
                </div> }
                <div >
                <h1 className="text-sm lg:text-base font-bold text-white">
                    {props.explanation}
                </h1>
                </div>
            </section>
        </div>
        </>
    )

}

export async function getStaticProps() {
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

    const data = await res.json()

    console.log(data)

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