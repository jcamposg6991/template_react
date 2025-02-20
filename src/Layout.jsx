import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./views/Home.jsx"
import NotFound from "./views/NotFound.jsx"

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Layout