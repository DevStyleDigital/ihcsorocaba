import type { AppProps } from 'next/app';
import Head from 'next/head';

import { LayoutProvider } from '@contexts/Layout';
import { AuthProvider } from '@contexts/Auth';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import { MainCSS } from '@stylesPages/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Instituto Humberto de Campos</title>
      </Head>
      <LayoutProvider>
        <AuthProvider>
          <Header />
          <MainCSS>
            <Component {...pageProps} />
          </MainCSS>
          <Footer />
        </AuthProvider>
      </LayoutProvider>
    </>
  );
};

export default MyApp;
