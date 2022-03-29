import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Registration from './Registration'
import SignIn from './SignIn'

export default function Login() {
  return (
    <Routes>
      <Route path='*' element={<SignIn/>}/>
      <Route path='reg' element={<Registration/>}/>
    </Routes>
  )
}
