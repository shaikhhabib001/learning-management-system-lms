import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Book } from 'lucide-react'


function InstructorDashboard() {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <Card>
                    <CardHeader className={"flex flex-row items-center justify-between space-y-0 pb-2"}>
                        <CardTitle className={"text-sm font-medium"}>MERN Stack Course</CardTitle>
                        <Book className='h-4 w-4 text-muted-foreground' />
                    </CardHeader>
                    <CardContent>
                        <p className='text-2xl font-bold'>Muhammad Umer</p>
                    </CardContent>
                </Card>



            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Students List</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='overflow-x-auto'>
                        <Table className={"w-full"}>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Course Name</TableHead>
                                    <TableHead>Student Name</TableHead>
                                    <TableHead>Student Email</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>MERN Stack</TableCell>
                                    <TableCell>Shams</TableCell>
                                    <TableCell>Shams360@gmail.com</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Laravel Stack</TableCell>
                                    <TableCell>Syed Umair</TableCell>
                                    <TableCell>SyedUmair12@gmail.com</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Next Js</TableCell>
                                    <TableCell>Rehan</TableCell>
                                    <TableCell>Rehan58975@gmail.com</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>MEAN Stack</TableCell>
                                    <TableCell>Abdul Wahab</TableCell>
                                    <TableCell>AbdulWahab444@gmail.com</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default InstructorDashboard