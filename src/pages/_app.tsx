import type { AppProps } from 'next/app';
import { SearchContextProvider } from '../contexts/SearchContext';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import Main from '../components/Main';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </SearchContextProvider>
  );
}

export default MyApp;
