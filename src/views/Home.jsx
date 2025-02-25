import React, {useContext} from 'react'
import { Context } from '../js/store/appContext.js'
import Navbar from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const { store, actions } = useContext(Context)

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
      <h5>Va mostrar los nombres guardados en contexto global: {store.personas}</h5>
    </div>
  )
}

export default Home