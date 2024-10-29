import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <div>
      <h2>Notfound, Sorry the page you are looking for is not found</h2>
      <Link href="/"> Return to home page </Link>
      
    </div>
  )
}
