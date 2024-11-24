import Header from '@/app/(router)/_components/Header'
import SideNav from '@/app/(router)/_components/SideNav'
import React, { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <div className="sm:w-64 sm:block hidden fixed">
                <SideNav />
            </div>
            <div className="sm:ml-64">
                <Header/>
                {children}
            </div>
        </div>
    )
}

export default Layout