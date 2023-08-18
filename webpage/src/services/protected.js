import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ children }) {
    var token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/" replace />
    }
    return children
}

export default Protected;