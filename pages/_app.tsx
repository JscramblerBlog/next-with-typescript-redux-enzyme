import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import nextReduxStore from '../nextReduxStore';
import { Provider } from 'react-redux';
import { ReduxAppProps } from '../types';

class TimerApp extends App<ReduxAppProps> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <>
        <Head>
          <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        </Head>

        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </>
    );
  }
}

export default nextReduxStore(TimerApp);
