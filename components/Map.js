import { useRef, useState, useEffect } from "react";
import React from 'react';
import GoogleMapReact from 'google-map-react'

const ISS_URL = "http://api.open-notify.org/iss-now.json"
const MAP_KEY = process.env.NEXT_API_KEY

const SpaceStation = () => <div><i className="fas fa-rocket fa-3x text-white hover:text-red-500"></i></div>

const Map = () => {

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [center, setCenter] = useState({lat: 0 , lng: 0});
    const [status, setStatus] = useState(null);
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            loadISSData();
        },3000);
        return () => clearInterval(interval);
    }, [center])

    const loadISSData = async () => {
        const response = await fetch(ISS_URL);
        const data = await response.json()
        setLat(data.iss_position.latitude)
        setLng(data.iss_position.longitude)
        setCenter(lat, lng)
        console.log(lat,lng)
        console.log(center)

    }

    return (
            <div>
                <div className="container mx-auto mb-12 flex-col items-center border-4 border-light-blue-500 border-opacity-100 p-12">
                    <p className="flex justify-center text-3xl lg:text-3xl font-bold uppercase text-red-100 ">Latitude: {lat} </p>
                    <p className="flex justify-center text-3xl lg:text-3xl font-bold uppercase text-red-100">Longitude: {lng}</p>
                </div>
                <div className = "map mb-8" style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact className = "map"
                    bootstrapURLKeys={{key: MAP_KEY }}
                    center={center}
                    zoom={zoom}
                >
                <SpaceStation
                    lat = {lat}
                    lng = {lng}
                />
                </GoogleMapReact>
                </div>
            </div>
        )
 
}

export default Map;