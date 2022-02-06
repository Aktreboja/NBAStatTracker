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
      <nav>
        <Link href = "/"><a>Players</a></Link>
        <Link href = "/"><a>Teams</a></Link>
      </nav>
    </div>
  )
}
