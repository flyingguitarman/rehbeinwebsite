import React from 'react'
import App, { Container } from 'next/app'

import Nav from '../components/Nav';

import '../styles/main.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Nav />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp