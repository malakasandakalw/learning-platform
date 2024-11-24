import { BellDot, Search } from 'lucide-react'
import React from 'react'
import { Button } from '../../../components/ui/button'

function Header() {
  return (
    <div className='py-3 px-5 bg-white flex'>
        <div className="flex gap-2 border p-2 rounded-md items-center">
            <Search className='h-4 w-4'/>
            <input type='text' placeholder='Search..' className='outline-none'/>
        </div>
        <div className='flex gap-5 items-center ml-auto'>
            <BellDot/>
            <Button>Get Started</Button>
        </div>
    </div>
  )
}

export default Header