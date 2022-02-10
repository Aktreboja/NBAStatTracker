import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import PageLayout from '../Components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
        <Head>
          <title>StatsCentral</title>
        </Head>
        <h1>StatsCentral</h1>
        <p>
          A simple web application modeling Nba Stats using the BallDontLie Api
        </p>
     
    </PageLayout>

    
  )
}
