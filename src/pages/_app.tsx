import { AppProps } from 'next/app';
import { AppShell } from '@mantine/core';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
import { AuthProvider } from '../utils/Auth';

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
          <Head>
            <title>Panthera</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Apex" />
          </Head>

          <ContextProvider>
            <div className="flex flex-col h-screen">
              <Notifications />
              <AppShell header={<AppBar />} style={{ backgroundColor: '#707070', height: '100vh' }}>
                <Component {...pageProps} />
              </AppShell>
              <Footer/>
            </div>
          </ContextProvider>
        </AuthProvider>
    );
};

export default App;
