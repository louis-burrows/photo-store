// used to generate the head and meta data
import Head from 'next/head'

//allows linking to other pages, like routing
import Link from 'next/link'

//yarn add sass
import styles from '../styles/Home.module.scss'

import NavBar from "../Components/NavBar/NavBar"


export default function Home() {

  const {isNavShowing, toggleTheNavbar} = "";

  const toggleNav = () => {
    
  }

  return (
    <div>

      <Head>
        <title>Dolinska Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar toggleNav={isNavShowing}/>
        <h1>
          Dolinska Photography
        </h1>

        <button onClick={() => toggleNav()}>Toggle NavBar</button>
      </main>

    </div>
  );
};
