import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth/authPage"
import { Toaster } from "@/components/ui/sonner"
import RouteGuard from "./components/route-guard/RouteGuard"
import { useContext, useEffect } from "react"
import { AuthState } from "./context/auth-context/Auth-Context"
import InstructorDashboardPage from "./pages/instructor/InstructorDashPage"
import CreateNewCourse from "./pages/instructor/CreateNewCourse"
import NotFoundPage from "./pages/not-found"
import StudentHomePage from "./pages/student/StudentHomePage"
import UpdateNewCourse from "./pages/instructor/UpdateNewCourse"
import StudentLayout from "./pages/student/StudentLayout"
import StudentCoursesPage from "./pages/student/StudentCoursesPage"

function App() {
  const { auth, handleCheckAuth } = useContext(AuthState);
  useEffect(() => {
    handleCheckAuth();
  }, [])
  return (
    <>
      <Routes>
        <Route path="/auth" element={<RouteGuard authenticate={auth.authenticate} element={<AuthPage />} user={auth.user} />} />
        <Route path="/instructor" element={<RouteGuard authenticate={auth.authenticate} element={<InstructorDashboardPage />} user={auth.user} />} />
        <Route path="/instructor/create-new-course" element={<RouteGuard authenticate={auth.authenticate} element={<CreateNewCourse />} user={auth.user} />} />
        <Route path="/instructor/update-course/:id" element={<RouteGuard authenticate={auth.authenticate} element={<UpdateNewCourse />} user={auth.user} />} />


        <Route path="/" element={<RouteGuard authenticate={auth.authenticate} element={<StudentLayout />} user={auth.user} />}
        >
          <Route path="" element={<StudentHomePage />} />
          <Route path="student-courses" element={<StudentCoursesPage />} />
        </Route>


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
