import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import PlayoffGames from "../../Containers/PlayoffGames/PlayoffGames"

import Bucket from "../../Bucket.jpg"

import "../../css/components/Pages/Landing.css"
export default function Landing() {
    return (
    <div className="App">
          <Navbar />
          <div className = "Parallax"><p>Your place for stats and news.</p></div>
        <section className = "LandingShowcase">
            
      
                
            <PlayoffGames />
        </section>

    </div>
    )
}
