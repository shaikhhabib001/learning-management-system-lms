import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const StudentState = createContext(null);

function StudentContext({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const [couresList, setCouresList] = useState([])

  const getAllCourses = async () => {
    try {
      setIsLoading(true)
      const responce = await axios.get("http://localhost:5000/api/v1/student/course/");
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
    <StudentState.Provider value={{ isLoading, couresList, getAllCourses }}>
      {children}
    </StudentState.Provider>
  )
}

export default StudentContext