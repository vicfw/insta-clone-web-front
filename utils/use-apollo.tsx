import { useEffect, useMemo, useState } from 'react';
import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
// import { concatPagination } from '@apollo/client/utilities';
import { onError } from '@apollo/client/link/error';
import { createNetworkStatusNotifier } from 'react-apollo-network-status';
import { Alert, Snackbar } from '@mui/material';
// import merge from 'deepmerge';
// import isEqual from 'lodash/isEqual';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const { link: Link, useApolloNetworkStatus } = createNetworkStatusNotifier();

//global error handler component or global error handler
export function GlobalLoadingIndicator() {
  const status = useApolloNetworkStatus();
  const [showSnack, setShowSnack] = useState(false);

  useEffect(() => {
    if (status.queryError?.networkError) {
      setShowSnack(true);
    }
  }, [status]);

  return (
    <Snackbar
      open={showSnack}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={4000}
      color="success"
    >
      <Alert severity="error" sx={{ width: '100%' }}>
        Internet connection issue
      </Alert>
    </Snackbar>
  );
}

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'include',
});

const link = from([Link, httpLink]);

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    // const existingCache = _apolloClient.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    // const data = merge(existingCache, initialState, {
    //   // combine arrays using object equality (like in sets)
    //   arrayMerge: (destinationArray, sourceArray) => [
    //     ...sourceArray,
    //     ...destinationArray.filter((d) =>
    //       sourceArray.every((s) => !isEqual(d, s))
    //     ),
    //   ],
    // });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client: any, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
