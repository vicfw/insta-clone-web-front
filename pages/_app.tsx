import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import {
  GlobalLoadingIndicator,
  initializeApollo,
  useApollo,
} from 'utils/use-apollo';
import { theme } from 'utils/theme';
import { useRouter } from 'next/router';
import { ContextProvider } from 'context/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const client = useApollo(pageProps);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ContextProvider client={client}>
          <GlobalLoadingIndicator />
          <Component {...pageProps} />
        </ContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export async function getStaticProps(ctx: any) {
  //test it for ssr query
  const apolloClient = initializeApollo();
}

export default MyApp;
