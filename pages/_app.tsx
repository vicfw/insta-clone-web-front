import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import CreateClient, { GlobalLoadingIndicator } from 'utils/use-apollo';
import { theme } from 'utils/theme';
import { useRouter } from 'next/router';
import { ContextProvider } from 'context/UserContext';
import { NextPageContext } from 'next';
import { GET_CURRENT_USER } from 'gql/query/getCurrentUser';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const client = CreateClient(null);

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



export default MyApp;
