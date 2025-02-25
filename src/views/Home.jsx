import React, {useContext} from 'react'
import { Context } from '../js/store/appContext.js'
import Navbar from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()


  const handlerClick = () =>{
    console.log("este boton va a login");
    navigate("/login")
    
  }

  return (
    <div>
      Home
      <Navbar/>
      <button onClick={handlerClick}>Navego a LogIn</button>
    </div>
  )
}

export default Home