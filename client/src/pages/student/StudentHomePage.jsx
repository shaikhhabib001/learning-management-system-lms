import React from 'react'
import banner from "../../../public/banner.jpg"
import { Button } from '@/components/ui/button'
import { courseCategories } from '@/config'

function StudentHomePage() {
    return (
        <div className='min-h-screen bg-white'>
            <section className='flex flex-col lg:flex-row items-center justify-between py-8 px-4 lg:px-8'>
                <div className='lg:w-1/2 lg:pr-12'>
                    <h1 className='text-4xl font-bold mb-4'>Learning That gets go</h1>
                    <p className='text-xl'>
                        Skills for your present and your future. Get Started with US
                    </p>
                </div>
                <div className='lg:w-full mb-8 lg:mb-0'>
                    <img src={banner} width={600} height={400} className='w-full h-auto rounded-lg shadow-lg' />
                </div>
            </section>

            <section className='py-8 px-4 lg:px-8 bg-gray-100'>
                <h2 className='text-2xl font-bold mb-6'>Courses Categories</h2>
                <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        courseCategories.map((item) => {
                            return <Button key={item.id}>{item.label}</Button>
                        })
                    }

                </div>
            </section>

            <section className='py-12 px-4 lg:px-8'>
                <h2 className='text-2xl font-bold mb-6'>Featured Categories</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                            return <div className='border rounded-lg overflow-hidden shadow cursor-pointer'>
                                <img className='w-full h-40 object-cover' src='https://img-c.udemycdn.com/course/480x270/6566789_2e8a_7.jpg' />
                                <div className='p-4'>
                                    <h3 className='font-bold mb-2'>MERN Stack Course</h3>
                                    <p className='text-sm text-gray-700 mb-2'>Muhammad Umer</p>
                                    <p className='font-bold text-[16px]'>$18000</p>
                                </div>
                            </div>
                        })
                    }

                </div>
            </section>
        </div>
    )
}

export default StudentHomePage