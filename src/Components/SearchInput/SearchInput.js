import React from 'react'


import "../../css/components/SearchInput.css"

export default function SearchInput(props) {
    return (
        <input type = "text"  placeholder = {props.searchParam} className = "SearchInput" value = {props.value}  onChange = {props.onChange}/>
    )
}
