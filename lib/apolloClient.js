import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useMemo } from "react";



const client = new ApolloClient({
    uri: 'https://lingering-leaf.us-west-2.aws.cloud.dgraph.io/graphql',
    cache: new InMemoryCache()
  });
  