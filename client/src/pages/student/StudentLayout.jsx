import StudentHeader from '@/components/student/StudentHeader'
import React from 'react'
import { Outlet } from 'react-router-dom'

function StudentLayout() {
    return (
        <div>
            <StudentHeader />
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default StudentLayout