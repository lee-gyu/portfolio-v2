import Head from 'next/head'
import { App } from "./common/app"

import "./styles/index.scss";

export default ({ Component, pageProps }) => {
  return <>
    <Head>
      <title>Lee Gyu</title>
    </Head>
    <App>
      <Component {...pageProps} />
    </App>
  </>
}