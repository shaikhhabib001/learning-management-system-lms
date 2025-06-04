import React, { useContext } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Delete, Edit } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { InstructorState } from '@/context/instructor-context/InstructorContext'
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from '@/config'



function InstructorCourses() {

    const navigate = useNavigate();

    const { couresList, setCourceCurriculumFormData, setLandingFormData, handleCourseDelete } = useContext(InstructorState)
    return (
        <Card>
            <CardHeader className={"flex justify-between flex-row items-center"}>
                <CardTitle>All Courses</CardTitle>
                <Button onClick={() => {
                    setCourceCurriculumFormData([courseCurriculumInitialFormData])
                    setLandingFormData(courseLandingInitialFormData)
                    navigate("/instructor/create-new-course")
                }}>
                    Create New Courses
                </Button>
            </CardHeader>
            <CardContent>
                <div className='overflow-x-auto'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Course</TableHead>
                                <TableHead>Students</TableHead>
                                <TableHead>Revenue</TableHead>
                                <TableHead className={"text-right"}>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                couresList && couresList.length && couresList.map((item) => {
                                    return <TableRow key={item._id}>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>{item.students.length}</TableCell>
                                        <TableCell>{item.students.length * item.pricing}</TableCell>
                                        <TableCell className={"text-right"}>
                                            <Button onClick={() => navigate(`/instructor/update-course/${item._id}`)} variant={"ghost"} size={"sm"}><Edit className='h-6 w-6' /></Button>
                                            <Button onClick={() => handleCourseDelete(item._id)} variant={"ghost"} size={"sm"}><Delete className='h-6 w-6' /></Button>
                                        </TableCell>
                                    </TableRow>
                                })
                            }

                        </TableBody>
                    </Table>
                </div>
            </CardContent>

        </Card>

    )
}

export default InstructorCourses