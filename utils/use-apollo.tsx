import { useEffect, useMemo, useState } from 'react';
import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { createNetworkStatusNotifier } from 'react-apollo-network-status';
import { createUploadLink } from 'apollo-upload-client';
import SnackAlert from 'components/Alert';
import { setContext } from '@apollo/client/link/context';
import { NextPageContext } from 'next';

const { link: Link, useApolloNetworkStatus } = createNetworkStatusNotifier();

//global error handler component or global error handler
export function GlobalLoadingIndicator() {
  const status = useApolloNetworkStatus();
  const [showSnack, setShowSnack] = useState(false);

  console.log(status, 'status');

  useEffect(() => {
    if (status.queryError?.networkError) {
      setShowSnack(true);
    }
  }, [status]);

  return <SnackAlert show={showSnack} message="Internet connection issue" />;
}

const link = from([
  Link,
  createUploadLink({
    uri: 'http://localhost:3000/graphql',
    credentials: 'include',
  }) as any,
]);

const CreateClient = (ctx: NextPageContext | null) => {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        cookie:
          (typeof window === 'undefined'
            ? ctx?.req?.headers.cookie || undefined
            : undefined) || '',
      },
    };
  });

  return new ApolloClient({
    credentials: 'include',
    link: authLink.concat(link),
    cache: new InMemoryCache(),
    ssrMode: true,
  });
};

export default CreateClient;
