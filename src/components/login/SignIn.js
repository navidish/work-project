import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'
import AdminDashboard from './AdminDashboard'
import UserDashboard from './UserDashboard'
import { Route, Routes } from 'react-router-dom'

export default function SignIn() {

  const [user, setUser] = useState({
    id: 0,
    userName: "",
    password: ""
  })
  const [userList, setuserList] = useState([user])
  const [logedIn, setLogedIn] = useState(false)
  const updateuserList = [
    ...userList,
    {
      id: userList.length + 1,
      userName: user.userName,
      password: user.password
    }
  ]

  const checkValidUser = () => {
    updateuserList.map(
      item => {
        if (item.userName === user.userName) {
          if (item.password === user.password) {
            setLogedIn(true)
          }
        }
      }
    )
  }

  const handelClick = () => {
    setuserList(updateuserList);
    setUser({
      userName: " ",
      password: " "

    })
    console.log(updateuserList)
    console.log(userList)
  }

  return (
    <Grid container>
      <form role="form">
        <TextField
          autoComplete='false'
          variant='outlined'
          label="User Name"
          name='name'
          value={user.userName}
          onChange={e => setUser({ ...user, userName: e.target.value })}
          placeholder='input your user name' />
        <TextField
          autoComplete='false'
          variant='outlined'
          label="Password"
          name='pwd'
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
          placeholder='input your password' />
        <Button variant="outlined" onClick={handelClick}>Log in</Button>
        <Button variant="outlined" onClick={checkValidUser}>check in</Button>
      </form>
      {

        <Routes>
          <Route
            path="/dashboard"
            render={
              logedIn ?
                <AdminDashboard /> : <UserDashboard />
            }
          />
        </Routes>
      }

    </Grid>
  )
}
