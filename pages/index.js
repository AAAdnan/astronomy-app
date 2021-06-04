import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link';
import React from "react";
import { motion } from 'framer-motion';
import ParticleComponent from '../components/ParticleComponent'
import LandingPage from '../components/LandingPage'


// type User {
//   username: String! @id @search(by: [hash])
//   name: String
//   todos: [Todo] @hasInverse(field: user)
//   albums: [Album] @hasInverse(field: user)
// }

// type Todo @auth(
//   query: { rule: """
//       query($USER: String!) {
//           queryTodo {
//               user(filter: { username: { eq: $USER } }) {
//                   __typename
//               }
//           }
//       }"""}){
//   id: ID!
//   value: String! @search(by: [fulltext])
//   completed: Boolean! @search
//   user: User!
// }

const buttonVariants = {
  hover: {
    scale: 1.1,
    opacity: 1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
    }
  }
}

const Home = () => {

  return(
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
    <ParticleComponent />
    <div className="flex items-center px-6 lg:px-32 text-white">
      <section className="w-full flex align-center justify-between">
        <div className="flex-col items-center">
            <h1 className="text-3xl lg:text-5xl font-bold uppercase text-white"
            >
            Topnomi
            </h1>
            <Link href="/store">
                <motion.button className="bg-transparent border-white	opacity-70 text-white font-bold mt-4 py-2 px-4 rounded-full"
                variants={buttonVariants}
                whileHover="hover"
                >
                Near Me
                </motion.button>
            </Link>
        </div>
        <div className="text-xl lg:text-3xl font-bold uppercase text-white">
            <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            >
            Take a photo.
            </motion.p>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            >
            Upload.
            </motion.p>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            >
            Create your own personal album
            </motion.p>
        </div>
      </section>
    </div>
  </>
  )
};

export default Home;

