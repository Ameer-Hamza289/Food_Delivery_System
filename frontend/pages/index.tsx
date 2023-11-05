import Head from 'next/head'
import { Inter } from 'next/font/google'
import Welcome from '@/components/Welcome'

 

// const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  return (
    <>
      <Head>
        <title>University Of Development</title>
        <meta name="description" content="One-Stop Solution for Software | Web " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-0">
        <Welcome/>
      </main>
    </>
  )
}

export default Home