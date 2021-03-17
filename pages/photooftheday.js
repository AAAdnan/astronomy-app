import React, { Component } from 'react'
import ReactPlayer from "react-player"
import Head from 'next/head'
import Nav from '../components/Nav'
import fetch from 'isomorphic-unfetch'

function getPhotoOfTheDay(props) {

    return(<>
        <Head>
            <title>Photo of the day</title>
        </Head>
        <Nav />
        <div className="h-screen container px-6 lg:px-32 bg-black text-white">
            <section className="w-full flex flex-col object-center">
                <div className="flex flex-row justify-center ">
                {/* <div>
                    {props.type === 'youtube' ? <ReactPlayer url={props.imageUrl}  /> : <img className="transform scale-75" src={props.imageUrl} />}
                </div> */}
                <div className="text-xl lg:text-3xl font-bold uppercase text-white">
                    {props.title}
                </div>
                </div>
                <div >
                <h1 className="text-base lg:text-base font-bold uppercase text-white">
                    {props.explanation}
                </h1>
            </div>
            </section>
        </div>
    {/* <div className="container flex px-6 lg:px-32 bg-black text-white">
      <section>
        <div className="w-full flex justify-between">   
          <h1 className="text-3xl lg:text-5xl font-bold uppercase text-white p-12">
            {props.title}
          </h1>
          <h1>
            {props.type === 'youtube' ? <ReactPlayer url={props.imageUrl}  /> : <img className="object-contain" src={props.imageUrl} />}
          </h1>
        </div>
        <div >
        <h1 className="text-base lg:text-base font-bold uppercase text-white">
            {props.explanation}
          </h1>
        </div>
      </section>
    </div> */}
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