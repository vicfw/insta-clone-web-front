import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import CreateClient, { GlobalLoadingIndicator } from 'utils/use-apollo';
import { theme } from 'utils/theme';
import { ContextProvider } from 'context/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
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
