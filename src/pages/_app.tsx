import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cesar Processos</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
