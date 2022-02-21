import React from 'react'

export default function Error({ statusCode }) {
  return (
    <p>
        {statusCode 
            ? `An error ${statusCode} occured`
            : 'An error occured on Client'}
    </p>
  )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
