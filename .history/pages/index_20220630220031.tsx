import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col   py-2">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <section>

        </section>
      </main>
    </div>
  )
}

export default Home
