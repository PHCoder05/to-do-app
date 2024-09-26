import React from 'react'
import '../globals.css'
import Link from 'next/link'
const Header = () => {
    

  return (
     
      <div className="h-16 px-5 text-white bg-red-500 flex items-center justify-between">

 <Link href ="/"><h1>Logo</h1></Link>
        <div className="flex gap-8">
            <Link href="/About">About</Link>
            <Link href="/App">App</Link>
            <Link href="/Contacts">Contacts</Link>
        </div>
      </div>
     
     
  )
}

export default Header