import { MenuItemWithIcon } from '@/app/models/MenuItem'
import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {

    const menu: MenuItemWithIcon[] = [
        {
            id: 1,
            name: 'All Courses',
            icon: BookOpen
        },
        {
            id: 2,
            name: 'Membership',
            icon: BadgeIcon
        },
        {
            id: 3,
            name: 'Be Instructor',
            icon: GraduationCap
        }
    ]

  return (
    <div className='p-3 bg-white shadow-sm border h-screen'>
        <Image src='/logo-learning-platform.webp' alt='Logo' width={70} height={20}/>
        <hr className='mt-5'/>
        <div className='mt-6'>
            {
                menu.map((item) => (
                    <div key={item.id} className='group flex gap-3 mt-1 p-3 text-[16px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200'>
                    <item.icon className='group-hover:animate-bounce'/>
                    <h2>{item.name}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SideNav