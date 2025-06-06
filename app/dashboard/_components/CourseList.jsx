"use client"
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CourseCardItem from './CourseCardItem';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { CourseCountContext } from '@/app/_context/CourseCountContext';
import { DashboardSearchContext } from '@/app/_context/DashboardSearchContext';

function CourseList() {

    const { user } = useUser();
    const [courseList, setCourseList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { totalCourse, setTotalCourse } = useContext(CourseCountContext);
    const { search } = useContext(DashboardSearchContext);

    useEffect(() => {
        user && GetCourseList();
    }, [user])

    const GetCourseList = async () => {
        setLoading(true);
        const result = await axios.post('/api/courses',
            { createdBy: user?.primaryEmailAddress?.emailAddress })
        setCourseList(result.data.result);
        setLoading(false);
        setTotalCourse(result.data.result?.length);
    }

    // Filter courses by search query (case-insensitive)
    const filteredCourses = courseList.filter(course => {
      const title = course?.courseLayout?.course_title || course?.courseLayout?.courseTitle || '';
      return title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className='mt-0'>
            <h2 className='font-bold text-2xl flex justify-between items-center'>Your Study Material
                <Button variant="outline"
                    onClick={GetCourseList}
                    className="border-primary text-primary"> <RefreshCw /> Refresh</Button>
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-5'>
                {loading == false ? filteredCourses?.map((course, index) => (
                    <CourseCardItem course={course} key={index} />
                ))
                    : [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div key={index} className='h-56 w-full bg-slate-200 rounded-lg animate-pulse'>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseList