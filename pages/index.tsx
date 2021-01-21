// used to generate the head and meta data
import Head from 'next/head'

//allows linking to other pages, like routing
import Link from 'next/link'

//yarn add sass
import styles from '../styles/Home.module.scss'

import NavBar from "../Components/NavBar/NavBar"


export default function Home() {
  return (
    <div>

      <Head>
        <title>Dolinska Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <NavBar />

        <h1>
          Dolinska Photography
        </h1>

        <button>Toggle NavBar</button>


      </main>

    </div>
  )
}
