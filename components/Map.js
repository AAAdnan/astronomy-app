import { useRef, useState, useEffect } from "react";
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { AnimatePresence, motion, useSpring, useCycle } from 'framer-motion';

const ISS_URL = "http://api.open-notify.org/iss-now.json"
const MAP_KEY = process.env.NEXT_API_KEY

const SpaceStation = () => <div><i className="fas fa-rocket fa-3x text-white hover:text-red-500"></i></div>

const Map = () => {

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const [status, setStatus] = useState(null);
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            loadISSData();
        },3000);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        if ( !center && lat && lng ) {
         setCenter({lat: lat, lng: lng })
        }

        console.log({ lat,lng })

    }, [lat, lng])

    const loadISSData = async () => {
        const response = await fetch(ISS_URL);
        const data = await response.json()
        setLat(data.iss_position.latitude)
        setLng(data.iss_position.longitude)
    }

    const loaderVariants = {
        animationOne: {
          x: [-20, 50],
          y: [0, -30],
          transition: {
            x: {
              yoyo: 6,
              duration: 1,
            },
            y: {
              yoyo: 6,
              duration: 0.5,
              ease: 'easeOut'
            }
          }
        },
        animationTwo: {
            x: [-50, 20],
            y: [0, -30],
            transition: {
              x: {
                yoyo: 6,
                duration: 1,
              },
              y: {
                yoyo: 6,
                duration: 0.5,
                ease: 'easeOut'
              }
            }
          },
      }

    return (
            <div>
                <div className="container mx-auto mb-12 flex justify-between items-center border-4 border-light-blue-500 border-opacity-100 p-12">
                    <motion.div
                        drag
                        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                        dragElastic={0.8}
                        variants={loaderVariants}
                        // initial="hidden"
                        animate="animationOne"
                        className="text-center"
                    >
                        <i class="cursor-pointer fas fa-4x fa-large fa-satellite-dish text-white"></i>
                    </motion.div>
                    <div className="mx-auto flex-col items-center">
                        <p className="flex justify-center text-3xl lg:text-3xl font-bold uppercase text-red-100 ">Latitude: {lat} </p>
                        <p className="flex justify-center text-3xl lg:text-3xl font-bold uppercase text-red-100">Longitude: {lng}</p>
                    </div>
                    <motion.div
                        drag
                        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                        dragElastic={0.8}
                        variants={loaderVariants}
                        // initial="hidden"
                        animate="animationTwo"
                        className="text-center"
                    >
                        <i class="cursor-pointer fas fa-4x fa-large fa-satellite-dish text-white"></i>
                    </motion.div>
                </div>
                <div className = "map mb-8" style={{ height: '100vh', width: '100%' }}>
                { center && 
                <GoogleMapReact className = "map"
                    bootstrapURLKeys={{key: MAP_KEY }}
                    center={center}
                    zoom={zoom}
                >
                <SpaceStation
                    lat = {lat}
                    lng = {lng}
                />
                </GoogleMapReact> }
                </div>
            </div>
        )
 
}

export default Map;