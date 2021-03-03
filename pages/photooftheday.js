import React, { Component } from 'react'
import ReactPlayer from "react-player"
import fetch from 'isomorphic-unfetch'

function getPhotoOfTheDay(props) {

    console.log(props)

    return(
        <div>
            <div>
                {props.title}
            </div>
            <div>
                {props.type === 'youtube' ? <ReactPlayer url={props.imageUrl}  /> : <img src={props.imageUrl} />}
            </div>
            <div>
                {props.explanation}
            </div>
        </div>
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