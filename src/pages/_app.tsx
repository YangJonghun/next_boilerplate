import React from 'react';
import App, { Container, AppContext } from 'next/app';

import Helmet from 'components/Helmet';

class CustomApp extends App {
  static async getInitialProps(context: AppContext) {
    const { Component, ctx } = context;

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Helmet title="Next-Boilerplate" />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default CustomApp;
