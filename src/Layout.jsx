import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./views/Home.jsx"
import NotFound from "./views/NotFound.jsx"
import LogIn from './views/LogIn.jsx'
import injectContext from './js/store/appContext.js'
import Register from './views/Register.jsx'

const Layout = () => {

  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          {/* <Route exact path='/' element={<Home/>}></Route> */}
          <Route exact path='/*' element={<NotFound/>}></Route>
          <Route exact path='/login' element={<LogIn/>}></Route>
          <Route exact path='/' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default injectContext(Layout)