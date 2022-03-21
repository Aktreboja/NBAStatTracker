import React from 'react'
import styles from '../styles/Layout.module.css'

export default function IntroductionSection() {
  return (
    <section className = {styles.introductionSection}>
        <div>
          <p>Search for a current NBA player for their current season stats and averages</p>
        </div>
        <div><p>Be able to view the upcoming schedule of games for that player</p></div>
        
    </section>
  )
}
