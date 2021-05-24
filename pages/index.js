import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';




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


const Home = () => {

  return(
  <>
    <Nav />
    <Head>
      <title>Home</title>
    </Head>
    <div className="h-screen flex items-center px-6 lg:px-32 bg-black text-white">
      <section className="w-full flex align-center justify-between">
        <div className="flex-col items-center">
          <h1 className="text-3xl lg:text-5xl font-bold uppercase text-white"
          >
          Topnomi
          </h1>
          <Link href="/store">
              <motion.button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded-full">
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
      <Footer />
    </div>
  </>
  )
};

export default Home;

