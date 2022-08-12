import React, {useState} from "react"
import {Navigate} from "react-router-dom"

export const Login = ({loggedIn}) => {
  console.log(`Login status: ${loggedIn}`)
  if (loggedIn === "true") {
    console.log('Home redirect');
    return <Navigate to="/home"/>
  }
  else 
    return (
       <div className="container pt-3">
        <div className="row">
          <div className="col">
             Inside LoginPage
          </div>
        </div>
      </div>
    )
}