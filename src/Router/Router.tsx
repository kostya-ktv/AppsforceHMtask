import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Page/Home/Home'
import { getUsersAndDispatch } from '../Store/Actions/user.actions'

const Router = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => getUsersAndDispatch(dispatch), 3000)
  }, [])

  return (
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>

  )
}

export default Router