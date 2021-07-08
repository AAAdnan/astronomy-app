import React from "react"
import Head from 'next/head'
import Nav from '../components/Nav'
import { useQuery, useMutation, gql } from "@apollo/client"
import TodoItem from '../components/TodoItem';
import "react-todomvc/dist/todomvc.css"

const Todos = () => {
  return(
  <>
    <Nav />
    <Head>
      <title>Album</title>
    </Head>
      <div className="container mx-auto">
       <TodoItem />
      </div>
  </>
  )
};

export default Todos;
