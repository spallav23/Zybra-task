import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1 className='text-5xl text-red-400 px-20 py-14'>About</h1>
        <p className='text-2xl px-20 py-14'>hello, i am pallav shah, thank you for this opportunity.  </p>

        <div className='flex justify-center gap-20'>
        <Button variant="destructive"><Link href="https://drive.google.com/file/d/1URWpD6cC99X4FSirqcVX_ZrEmszzyRqj/view?usp=sharing" className='text-2xl p-2 text-slate-100'>Resume</Link></Button>
        <Button variant="secondary"><Link href="https://www.linkedin.com/in/pallavshah2310/" className='text-2xl p-2 text-blue-600'>Linkdin</Link></Button>
        </div>
    </div>
  )
}

export default page
