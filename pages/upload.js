import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import Link from 'next/link';
import ParticleComponentStar from '../components/ParticleComponentStar';
import { AnimatePresence, motion, useSpring, useCycle } from 'framer-motion'
import Sparkles from '../components/Sparkle';



import ImageUploader from '../components/Image-Uploader';

const Upload = () => {

  const [animation, cycleAnimation ] = useCycle("animationOne", "animationTwo")

  const loaderVariants = {
    animationOne: {
      x: [-20, 20],
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
      y: [0, -40],
      x: 0,
      transition: {
        y: {
          yoyo: 4,
          duration: 0.25,
          ease: 'easeOut'
        }
      }
    }
  }

  const nextVariants = {
    hidden: {
      x: '-200vw'
    },
    visible: {
      x: 0,
      transition: { type: 'spring', stiffness: 20 }
    }
  }

  return(
  <>
    <Nav />
    <Head>
      <title>Upload</title>
    </Head>
    <ParticleComponentStar/>
    <div className="md:absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col md:justify-center align-center">
      <motion.div 
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.8}
        variants={loaderVariants}
        // initial="hidden"
        animate="animationOne"
        className="text-center hidden md:block"
      >
      <i class="cursor-pointer fas fa-4x fa-large fa-user-astronaut text-white"></i>
      </motion.div>
      <div className="text-center bg-black text-lg md:text-6xl font-bold uppercase text-red-100 md:pb-8 pt-8">
        <Sparkles>
          Upload Your Photo
        </Sparkles>
      </div>
      <div className="container mx-auto flex justify-center text-white pt-12 ">
       <ImageUploader />
      </div>
    </div>
  </>
  )
};

export default Upload;
