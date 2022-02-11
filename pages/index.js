import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import PageLayout from '../Components/PageLayout'

import Basketball from '../Components/Basketball'

import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <PageLayout>
        <Head>
          <title>StatsCentral</title>
        </Head>
        <section>
          <h1>StatsCentral</h1>
          <Basketball />
        </section>
        <p>
          A simple web application modeling Nba Stats using the BallDontLie Api
        </p>
        <section>
          <Link href = "/players"><Button variant='outline-dark' size = "lg">Players</Button></Link>
        </section>
    </PageLayout>
  )
}
