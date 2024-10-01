import Head from 'next/head'
import Script from 'next/script'
import { Flux } from '../components/fluxCoin/fluxpage.js'
import { NavBar } from '../components/navbar/navbar.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flux | Cryptocurency</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <NavBar/>
      <Flux/> 
    </div>
  )
}
