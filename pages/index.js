import Head from 'next/head'
import Image from 'next/image'
import HomeLead from '../components/homeLead'
import MainAppbar from '../components/mainAppbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mantra Quest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainAppbar />
      <HomeLead />
    </div>
  )
}
