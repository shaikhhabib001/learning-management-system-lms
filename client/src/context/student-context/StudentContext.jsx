import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const StudentState = createContext(null);

function StudentContext({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const [couresList, setCouresList] = useState([])

  const getAllStudentCourses = async (filter, sort) => {

    setIsLoading(true)
    const query = new URLSearchParams({
      ...filter,
      sortBy: sort
    })

    try {
      const responce = await axios.get(`http://localhost:5000/api/v1/student/course?${query}`);
      if (responce.data.success) {
        setCouresList(responce.data.data)
      }
    } catch (error) {
      console.log(error);

    } finally {
      setIsLoading(true)

    }
  }

  return (
    <StudentState.Provider value={{ isLoading, couresList, getAllStudentCourses }}>
      {children}
    </StudentState.Provider>
  )
}

export default StudentContext