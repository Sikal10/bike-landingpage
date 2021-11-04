import Head from 'next/head'
import Home from "../components/Home";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>EBike | Your bike electric upgrade</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

        <Home />
    </div>
  )
}
