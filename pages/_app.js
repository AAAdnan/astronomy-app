import '../styles/globals.css'
import "tailwindcss/tailwind.css";import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider } from "@apollo/client";
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

import Footer from '../components/Footer'

const GRAPHQL_ENDPOINT = 'http://localhost:8080/graphql';

const AuthorizedApolloProvider = ({ children }) => {

  const { isAuthenticated, getIdTokenClaims } = useAuth0()

  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  });

  const authLink = setContext(async (_, { headers }) => {

    if(!isAuthenticated) {
      return headers;
    }

    const token = await getIdTokenClaims();


   

    return {
      headers: {
        ...headers,
        "X-Auth-Token": token ? token.__raw: "",
      },
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-u0g-ju9g.eu.auth0.com"
      clientId="RMFhLDweiuNjrTgpCA8kJFe9YSbbJo0B"
      redirectUri={'http://localhost:3000/'}
    >
    <AuthorizedApolloProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </AuthorizedApolloProvider>
    </Auth0Provider>
  );
}