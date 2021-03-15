import React, { Component } from 'react'
import ReactPlayer from "react-player"
import Head from 'next/head'
import Nav from '../components/Nav'
import fetch from 'isomorphic-unfetch'

function getPhotoOfTheDay(props) {

    return(<>
        <Nav />
        <Head>
            <title>Photo of the day</title>
        </Head>
        <div className="flex items-center px-6 lg:px-32 bg-black text-white">
            <div className="flex flex-col">
                <h1 className="text-white">
                    {props.title} 
                </h1>
                <div className="text-xl lg:text-3xl font-bold uppercase text-white">
                    {props.type === 'youtube' ? <ReactPlayer url={props.imageUrl}  /> : <img className="object-scale-down" src={props.imageUrl} />}  
                </div>
                <div>
                    {props.explanation}
                </div>
            </div>
        </div>
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