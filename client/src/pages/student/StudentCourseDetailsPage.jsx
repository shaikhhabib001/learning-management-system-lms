import VideoPlayer from '@/components/instructor/VideoPlayer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Globe, PlayCircle } from 'lucide-react'
import React from 'react'

function StudentCourseDetailsPage() {
    return (
        <div className='mx-auto p-4'>
            <div className='bg-gray-900 text-white p-8 rounded-t-lg'>
                <h1 className='text-3xl font-bold mb-4'>MERN Stack + Next Js</h1>
                <p className='text-3xl mb-4'>Young someone others scientist send present industry.</p>
                <div className='flex items-center space-x-4 mt-2 text-sm'>
                    <span>Created By Muhammad Umer</span>
                    <span>Created On 3/16/2025</span>
                    <span className='flex items-center'>
                        <Globe className='h-4 w-4 mr-1' />
                        English
                    </span>
                    <span>
                        12 Students
                    </span>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-8 mt-8'>
                <main className='flex-grow'>
                    <Card className={"mb-8"}>
                        <CardHeader>
                            <CardTitle>What You'll learn</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                <li className='flex items-start'>
                                    <CheckCircle className='mr-2 h-5 w-5 text-green-500 flex-shrink-0' />
                                    <span>React</span>
                                </li>
                                <li className='flex items-start'>
                                    <CheckCircle className='mr-2 h-5 w-5 text-green-500 flex-shrink-0' />
                                    <span>Next Js</span>
                                </li>
                                <li className='flex items-start'>
                                    <CheckCircle className='mr-2 h-5 w-5 text-green-500 flex-shrink-0' />
                                    <span>MERN Web Dev.</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className={"mb-8"}>
                        <CardHeader>
                            <CardTitle>Course Description</CardTitle>
                        </CardHeader>
                        <CardContent>
                            South behind southern painting pull exist in. Another little more condition sing. Adult imagine not fly point eye. Explain firm marriage mission boy.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Course Curriculum</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul>
                                <li className='flex items-center mb-4'>
                                    <PlayCircle className='mr-2 h-4 w-4' />
                                    <span>Intro To MERN</span>
                                </li>
                                <li className='flex items-center mb-4'>
                                    <PlayCircle className='mr-2 h-4 w-4' />
                                    <span>Intro To MERN</span>
                                </li>
                                <li className='flex items-center mb-4'>
                                    <PlayCircle className='mr-2 h-4 w-4' />
                                    <span>Intro To MERN</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                </main>

                <aside className='w-full md:w-[500px]'>
                    <Card className={"sticky top-4"}>
                        <CardContent className={"p-6"}>
                            <div className='aspect-video mb-4 rounded-lg flex items-center justify-between'>
                                <VideoPlayer url={"https://www.youtube.com/watch?v=IA8JWGP13dI&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=3"} />
                            </div>
                            <div className='mb-4'>
                                <span className='text-3xl font-bold'>
                                    $ 16
                                </span>
                            </div>
                            <Button className={"w-full"}>Buy Now</Button>
                        </CardContent>

                    </Card>
                </aside>

            </div>
        </div>
    )
}

export default StudentCourseDetailsPage