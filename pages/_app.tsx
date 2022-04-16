import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';

import { ApolloProvider } from '@apollo/client';
import { initializeApollo, useApollo } from 'utils/use-apollo';
import { theme } from 'utils/theme';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const client = useApollo(pageProps);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export async function getStaticProps(ctx: any) {
  //test it for ssr mutation
  const apolloClient = initializeApollo();
}

export default MyApp;
