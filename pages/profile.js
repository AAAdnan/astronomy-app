import React from "react";
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import Nav from '../components/Nav'
import Head from 'next/head'
import Image from 'next/image'
import ParticleComponentStar from '../components/ParticleComponentStar'
import { AnimatePresence, motion, useSpring } from 'framer-motion'
import Sparkles from '../components/Sparkle';

const Profile = () => {
  const { loading, user } = useAuth0();

  const nextVariants = {
    hidden: {
      x: '-200vw'
    },
    visible: {
      x: 0,
      transition: { type: 'spring', stiffness: 20 }
    }
  }

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
      <>
      <Nav />
      <Head>
        <title>Profile</title>
      </Head>
      <ParticleComponentStar />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col justify-center align-center z-10">
        <motion.div 
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.8}
          variants={nextVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
          >
          <i class="cursor-pointer fas fa-4x fa-large fa-space-shuttle text-white"></i>
        </motion.div>
          <div className="text-center bg-black text-6xl font-bold uppercase text-red-100 pb-8 pt-8">
          <Sparkles>

            Profile
          </Sparkles>

          </div>
          <div className="container mx-auto flex justify-center text-white pt-12 ">
            <div className="profile border-4 border-light-blue-500 border-opacity-100">
                <img className="profile-img" src={user.picture} alt="Profile" />
            </div>
            <div className="pl-12 pt-6 pr-6 border-4 border-light-blue-500 border-opacity-100">
              <p>Name: <strong>{user.name}</strong></p>
              <p>Email: <strong>{user.email}</strong></p>
            </div>
          </div>
      </div>
      </>
  );
};

export default Profile;