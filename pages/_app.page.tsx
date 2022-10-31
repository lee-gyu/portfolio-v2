import Head from 'next/head'

import "./styles/index.scss";

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>Lee Gyu</title>
    </Head>
    <Component {...pageProps} />
  </>
}