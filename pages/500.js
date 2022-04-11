import React from 'react'
import Link from 'next/link'
import PageLayout from '../Components/Layout/PageLayout'

export default function Custom500() {
  return (
    <div>
        <h1>The NBA player you are trying to find does does not exist, please try again</h1>
        <Link href= "/" passhref ><a>Return to home page</a></Link>
    </div>
  )
}
