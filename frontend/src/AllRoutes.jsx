import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './component/LoginPage'
import { SignupPage } from './component/SignupPage'
import { PostPage } from './component/PostPage'
import { HomePage } from './component/HomePage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/register' element={<SignupPage />}></Route>
            <Route path='/post' element={<PostPage />}></Route>
            <Route path='/' element={<HomePage />}></Route>
        </Routes>
    </div>
  )
}
