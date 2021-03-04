import '../styles/globals.css'
import "tailwindcss/tailwind.css";

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://lingering-leaf.us-west-2.aws.cloud.dgraph.io/graphql',
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
