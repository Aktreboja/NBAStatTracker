import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import PageLayout from '../Components/PageLayout'

import ScheduleContainer from '../Components/ScheduleContainer'

import Button from 'react-bootstrap/Button'

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function Home({ todaysGamesData }) {
  
  console.log(todaysGamesData.data)
  let games = todaysGamesData.data


  return (
    <PageLayout>
        <Head>
          <title>StatsCentral</title>
        </Head>
        <section className = {styles.introductionSection}>
          <h1>StatsCentral</h1>
          <p>A simple web application modeling Nba Stats using the BallDontLie Api</p>
          <Link href = "/players" passHref><Button variant='outline-dark' size = "lg">Players</Button></Link>
        </section>
        <h1>Today's Games</h1>
        <p style={{color: 'gray'}}>* Note: The API isn't necessarily real time so the updates will be about every 10 minutes</p>
        <section className = {styles.ScheduleWrapper}>
          <ScheduleContainer gameData={ games } />
        </section>
    </PageLayout>
  )
}


 export async function getServerSideProps(context) {
    let date = new Date()
    let todaysYear = date.getFullYear()
    let todaysDay = (date.getDate() < 10) ? '0' +  date.getDate() : date.getDate()
    let todaysMonth = (date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)

    let combinedDate = todaysYear + '-' + todaysMonth + '-' + todaysDay
    //console.log(todaysYear + " " + todaysDay + ' ' + todaysMonth)
    let response = await fetch(`https://www.balldontlie.io/api/v1/games?start_date=${combinedDate}&end_date=${combinedDate}`)
    let todaysGamesData = await response.json()
    return {props: {todaysGamesData}}
}