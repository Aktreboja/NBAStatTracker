import React from 'react'
import "../../css/components/Footer.css"

const footer = () => {
    return (
        <footer className = "Footer">
            <div className = "Content">
                <h1 id = "Author">&#169; Aldrich Reboja</h1>
                <div className = "Socials">
                    <h1 className = "HoverLink"><a target = "_blank" rel="noopener noreferrer" href = "https://www.yahoo.com">Github</a></h1>
                    <h1 className = "HoverLink"><a target = "_blank" rel = "noopener noreferrer" href = "http://www.yahoo.com">LinkedIn</a></h1>
                </div>
            </div>
        </footer>
    )
}

export default footer;