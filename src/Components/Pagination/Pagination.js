import React from 'react'
import "./Pagination.css"

const Pagination = (props) => {

    console.log("length", props.length)

    let test = [];
    for (let i =0; i < props.length; i++) {
        test.push(<div key ={i } className = "PageNumber Active">{i + 1}</div>)
    }

    return (
        <div className = "Pagination">
            {test}
        </div>
    )
}

export default Pagination
