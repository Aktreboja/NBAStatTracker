import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function TeamLogoButton({index, urlName, teamId, fullName}) {
  return (
    <div className = "logo" key = {index}>
      <Link href = {`/teams/${urlName}`}>
        <Image src={`https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`} layout = "fill" objectFit='contain' alt = {fullName} />
        </Link>
    </div>
  )
}
