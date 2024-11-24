import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-lg p-5'>
        <Image src='/vercel.svg' alt='Banner Image' width={100} height={100}/>
        <div>
            <h2 className="font-bold text-[25px]">
                Welcome to <span className='text-primary'>Learn with Malaka</span>...
            </h2>
            <h2 className="text-gray-500">
                Explore, Learn and Build Applications
            </h2>
        </div>
    </div>
  )
}

export default Banner