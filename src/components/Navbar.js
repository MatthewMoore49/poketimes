import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
  
    return (
      <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a href="_" className="brand-logo">Poke'Times</a>
        <ul className="right">
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/About">About</Link></li>
            <li><NavLink to ="/Contact">Contact</NavLink></li>
             </ul>
        </div>
      </nav>
    )
}

export default  withRouter(Navbar)