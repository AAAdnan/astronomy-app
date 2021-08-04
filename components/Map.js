import { useRef, useState, useEffect } from "react";
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { AnimatePresence, motion, useSpring, useCycle } from 'framer-motion';
import { Loader } from "@googlemaps/js-api-loader"


const ISS_URL = "https://api.wheretheiss.at/v1/satellites/25544"
const MAP_KEY = process.env.NEXT_API_KEY

const SpaceStation = () => <div><i className="fas fa-rocket fa-3x text-white hover:text-red-500"></i></div>

const Map = () => {

  // const loader = new Loader({
  //   apiKey: "AIzaSyDuNvlk5TahBHSLzi4UDxGLef5508Fkga4",
  //   version: "weekly",
  // });

  // loader.load().then(() => {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // });
  

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

    }, [lat, lng])

    const loadISSData = async () => {
        const response = await fetch(ISS_URL);
        const data = await response.json()

        const latTwo = data.latitude.toFixed(2);

        setLat(data.latitude.toFixed(5))
        setLng(data.longitude.toFixed(5))
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
                <div className="container mx-auto mb-12 flex justify-between items-center border-4 border-light-blue-500 border-opacity-100 p-8">
                    <motion.div
                        drag
                        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                        dragElastic={0.8}
                        variants={loaderVariants}
                        // initial="hidden"
                        animate="animationOne"
                        className="text-center"
                    >
                        <i className="cursor-pointer fas fa-3x fa-large fa-satellite-dish text-white pt-4"></i>
                    </motion.div>
                    <div className="mx-auto flex-col items-center pb-8">
                        <p className="pb-8 text-white font-mono text-center">The International Space Station is moving at close to 28,000 km/h so its location changes really fast! Where is it right now?</p>
                        <p className="flex justify-center text-md md:text-3xl font-bold uppercase text-red-100 ">Latitude: {lat} </p>
                        <p className="flex justify-center text-md md:text-3xl font-bold uppercase text-red-100">Longitude: {lng}</p>
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
                        <i className="cursor-pointer fas fa-3x fa-large fa-satellite-dish text-white pt-4"></i>
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
                <div id="map"></div>
            </div>
        )
 
}

export default Map;