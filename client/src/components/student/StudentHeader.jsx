import { GraduationCap, TvMinimalPlay } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

function StudentHeader() {

    const navigate = useNavigate();
    return (
        <>
            <header className='flex items-center justify-between p-4 border-b relative'>
                <div className='flex items-center space-x-4'>
                    <Link to={"/"} className='flex items-center hover:text-black'>
                        <GraduationCap className='h-8 w-8 mr-4' />
                        <span className='font-extrabold md:text-xl text-[14px]'>LMS</span>
                    </Link>

                    <div className='flex items-center space-x-1'>
                        <Button>
                            Explore Courses
                        </Button>
                    </div>

                </div>

                <div className='flex items-center space-x-4'>
                    <div className='flex gap-4 items-center'>
                        <div onClick={() => navigate("/student-courses")} className='flex items-center cursor-pointer gap-3'>
                            <span className='font-bold md:text-xl text-[14px]'>My Courses</span>
                            <TvMinimalPlay />
                        </div>
                        <Button>Log out</Button>

                    </div>
                </div>
            </header>
        </>
    )
}

export default StudentHeader