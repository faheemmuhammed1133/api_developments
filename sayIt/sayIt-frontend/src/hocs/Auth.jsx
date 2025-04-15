import React from 'react'
import { Navigate } from 'react-router-dom'


function Auth(props) {
   // let navigate = useNavigate()
   let sayitInfo = localStorage.getItem("sayit-info")

  return sayitInfo!==null?props.children:<Navigate to="/login"/>
}

export default Auth