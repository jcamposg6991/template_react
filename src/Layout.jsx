import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./views/Home.jsx"
import NotFound from "./views/NotFound.jsx"
import LogIn from './views/LogIn.jsx'

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/*' element={<NotFound/>}></Route>
          <Route exact path='/login' element={<LogIn/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Layout