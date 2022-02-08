import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nba Web App</title>
      </Head>
      <h1>Nba App</h1>
      <p>
        A simple web application modeling Nba Stats using the BallDontLie Api
      </p>
      <nav>
        <Link href = "/players"><a>Players</a></Link>
        
      </nav>
    </div>
  )
}
