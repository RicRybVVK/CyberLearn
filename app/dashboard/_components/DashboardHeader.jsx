'use client'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Search } from 'lucide-react'

function DashboardHeader() {
  const path = usePathname();

  return (
    <div className={`p-5 shadow-md flex items-center justify-between`}>
      
      {/* Left side: Search Bar */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-60"
        />
        <Search className="absolute left-3 top-2.5 text-gray-500 h-5 w-5" />
      </div>

      {/* Right side: User & Dashboard */}
      <div className='flex items-center gap-3 ml-4'>
        <UserButton />
        <Link href={'/dashboard'}>
          <Button 
            className="bg-black text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default DashboardHeader