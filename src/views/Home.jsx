import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom'

const Home = () => {


  const handlerClick = () =>{
    console.log("estoy funcionando");
    
  }

  return (
    <div>
      Home
      <Navbar/>
      <button onClick={handlerClick}></button>
    </div>
  )
}

export default Home