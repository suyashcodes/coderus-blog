import Link from 'next/link'
import React from 'react'

export default function Links() {

    const links = [
        {
            "title": "Home",
            "path": "/"
        },
        {
            "title": "About",
            "path": "/about"
        },
        {
            "title": "Contact",
            "path": "/contact"
        },
        {
            "title": "Blogs",
            "path": "/blog"
        },
    ];
  return (
    <div>
      {links.map((link=>(
        /* since we are using map we have to use some key paramter to identify a unqie item each time */
        <Link href={link.path} key={link.title}>{link.title}</Link>
      )))}
    </div>
  )
}
