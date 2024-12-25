import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'




const Navbar = () => {
  return (
    <div className='w-full bg-gray-800 py-4 px-24  '>
      <span> University List</span>
      
        <list className='float-right'>
          <li className='inline-block px-4'><Button variant="ghost"><Link href="/" >Home</Link></Button>
          </li>
          <li className='inline-block px-4'><Button variant="ghost"><Link href="/Table" >List</Link></Button>
          </li>
          <li className='inline-block px-4'><Button variant="ghost"><Link href="/about" >About</Link></Button>
          </li>
        </list>

    </div>
  )
}

export default Navbar
