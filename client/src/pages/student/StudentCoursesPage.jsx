import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { filterOptions, sortOptions } from '@/config'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { ArrowUpDownIcon } from 'lucide-react'

function StudentCoursesPage() {
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
                    </div>
                </main>

            </div>

        </div>
    )
}

export default StudentCoursesPage