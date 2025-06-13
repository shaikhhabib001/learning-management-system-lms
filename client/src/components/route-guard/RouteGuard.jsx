import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function RouteGuard({ authenticate, user, element }) {

    const location = useLocation();


    if (!authenticate && !location.pathname.includes("/auth")) {
        return <Navigate to={"/auth"} />
    }

    if (authenticate && user.role == "student" && location.pathname.includes("/instructor")) {
        return <Navigate to={"/"} />
    }

    if (authenticate && user.role == "instructor" && location.pathname.includes("/")) {
        return <Navigate to={"/instructor"} />
    }

    if (authenticate && location.pathname.includes("/auth")) {
        if (user.role == "instructor") {
            return <Navigate to={"/instructor"} />
        } else {
            return <Navigate to={"/"} />
        }
    }

    return element;


}

export default RouteGuard