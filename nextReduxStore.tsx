import { DefaultAppIProps, NextAppContext } from 'next/app';
import React from 'react';
import { StoreCreator } from 'redux';
import { initializeStore, initialTimerState } from './store';

export default (App: any) => {
  return class AppWithRedux extends React.Component<DefaultAppIProps> {
    reduxStore: StoreCreator;

    static async getInitialProps(appContext: NextAppContext) {
      const appProps: Promise<DefaultAppIProps> = await App.getInitialProps(appContext);

      return {
        ...appProps
      };
    }

    constructor(props: DefaultAppIProps) {
      super(props);
      this.reduxStore = initializeStore(initialTimerState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
