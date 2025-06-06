"use client"
import { CourseCountContext } from '@/app/_context/CourseCountContext'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'

function SideBar() {
    const MenuList=[
        {
            name:'Dashboard',
            icon:LayoutDashboard,
            path:'/dashboard'
        },
        {
            name:'Profile',
            icon:UserCircle,
            path:'/dashboard/profile'
        },

    ]

    const {totalCourse,setTotalCourse}=useContext(CourseCountContext);
    const path=usePathname();
  return (
    <div className='h-screen shadow-md p-5'>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
                <h2 className="font-bold text-2xl">Cyber Learn</h2>
            </div>

            <div className='mt-10'>
                <Link href={'/create'} className="w-full">
                <Button 
                    className="w-full p-5 bg-black text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                     transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2" 
                    disabled={totalCourse>=20}>
                    Create New
                </Button>
                </Link>

                <div className='mt-5'>
                    {MenuList.map((menu,index)=>(
                        <Link href={menu.path} key={index} >
                        <div 
                        className={`flex gap-5 items-center p-3
                            hover:bg-slate-100 rounded-lg cursor-pointer mt-3
                        ${path==menu.path&&'bg-slate-100'}`}>
                            <menu.icon/>
                            <h2>{menu.name}</h2>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="text-xs xs:text-sm select-none text-gray-500 absolute bottom-10 w-[85%]">
                Originalus darbas. R. Rybako baigiamojo darbo projektas
            </div>
    </div>
  )
}

export default SideBar