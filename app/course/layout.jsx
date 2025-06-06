"use client";
import React from 'react'
import DashboardHeader from '../dashboard/_components/DashboardHeader'
import { DashboardSearchProvider } from '../_context/DashboardSearchContext'

function CourseViewLayout({children}) {
  return (
    <DashboardSearchProvider>
      <div>
        <DashboardHeader/>
        <div className='mx-10 md:mx-36 lg:px-44 mt-10'>
          {children}
        </div>
      </div>
    </DashboardSearchProvider>
  )
}

export default CourseViewLayout