import React, { useState } from 'react'
import { gql, ApolloClient, useApolloClient, useMutation } from '@apollo/client';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Head from "next/head";
import Nav from '../components/Nav';
import SignUpForm from '../components/SignUpForm';

// export const getServerSideProps = async ctx => {

//   const cookies = parseCookies(ctx)

//   if(!cookies.token) return { props: { loggedIn: false } }

//   if(cookies.token) return { props: { loggedIn: true } }
  
// }

export default function SignUp(props) {
          
    return <>
    <Head>
      <title>Sign Up</title>
    </Head>
     <Nav />
    <SignUpForm />
    </>;
  }

