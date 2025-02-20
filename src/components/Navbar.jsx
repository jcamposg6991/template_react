import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            Navbar
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/login"}>LogIn</Link></li>
        </div>
    )
}

export default Navbar