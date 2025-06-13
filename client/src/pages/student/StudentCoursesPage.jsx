import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { filterOptions, sortOptions } from '@/config'
import React, { useContext, useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { ArrowUpDownIcon } from 'lucide-react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { StudentState } from '@/context/student-context/StudentContext'

function StudentCoursesPage() {

    const { isLoading, couresList, getAllCourses } = useContext(StudentState)

    useEffect(() => {
        getAllCourses();
    }, [])
    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-3'>All Courses</h1>
            <div className='flex flex-col md:flex-row gap-4'>

                <aside className='w-full md:w-64 space-y-4'>
                    <div>
                        {
                            Object.keys(filterOptions).map((filterOption) => {
                                return <div key={filterOption} className='p-4 border-b'>
                                    <h3 className='font-bold mb-3'>{filterOption.toUpperCase()}</h3>
                                    <div className='grid gap-2 mt-2'>
                                        {
                                            filterOptions[filterOption].map((option) => {
                                                return <Label key={option}>
                                                    <Checkbox />
                                                    {option.label}
                                                </Label>
                                            })
                                        }
                                    </div>

                                </div>
                            })
                        }

                    </div>
                </aside>

                <main className='flex-1'>
                    <div className='flex justify-end items-center mb-4 gap-5'>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className={"flex items-center gap-2 p-5"}>
                                    <ArrowUpDownIcon className='h-4 w-4' />
                                    <span className='text-[16px] font-medium'>Sort By</span>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className={"w-[180px]"}>

                                {
                                    sortOptions.map((item) => {
                                        return <DropdownMenuItem key={item.id}>{item.label}</DropdownMenuItem>
                                    })
                                }


                            </DropdownMenuContent>
                        </DropdownMenu>
                        <span className='text-sm text-black font-bold'>
                            10 Results
                        </span>
                    </div>
                    <div className='space-y-4'>
                        {
                            couresList && couresList.length ? <div>
                                {
                                    couresList.map((course) => {
                                        return <Card className={'cursor-pointer'}>
                                            <CardContent className={"flex gap-4 p-4"}>
                                                <div className='w-48 h-32 flex-shrink-0'>
                                                    <img src='https://images.pexels.com/photos/7693928/pexels-photo-7693928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-full object-cover' />
                                                </div>
                                                <div className='flex-1'>
                                                    <CardTitle className={"text-xl mb-2"}>
                                                        {course.title}
                                                    </CardTitle>
                                                    <p className='text-sm text-gray-600 mb-1'>
                                                        {course.instructorName}
                                                        Created By Muhammad Umer
                                                    </p>
                                                    <p className='text-[16px] text-gray-600 mb-1'>
                                                        {course.curriculum.length}{" "}{course.curriculum.length > 1 ? "Lectures" : "Lecture"}

                                                    </p>
                                                    <p className='text-lg font-bold'>
                                                        $ {course.pricing}
                                                    </p>

                                                </div>
                                            </CardContent>

                                        </Card>
                                    })
                                }
                            </div> : <h2 className='font-extrabold text-4xl'>No Courses Found</h2>
                        }
                    </div>
                </main>

            </div>

        </div>
    )
}

export default StudentCoursesPage