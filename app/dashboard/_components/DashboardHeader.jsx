'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'
import { DashboardSearchContext } from '@/app/_context/DashboardSearchContext'

function DashboardHeader() {
  const path = usePathname();
  const { search, setSearch } = useContext(DashboardSearchContext);

  return (
    <div className="p-5 shadow-md flex items-center justify-between">
      {/* Left: Search bar only on /dashboard */}
      {path === '/dashboard' && (
        <div className="w-full max-w-md">
          <Input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-white"
          />
        </div>
      )}

      {/* Right side: User & Dashboard */}
      <div className="flex items-center gap-3 ml-auto">
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