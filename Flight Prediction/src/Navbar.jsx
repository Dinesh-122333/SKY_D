/* eslint-disable no-unused-vars */
import { Link } from "react-scroll/modules"
import { Link as Linker } from 'react-router-dom'
import './assets/css/Nav.css'
import React,{ useState, useEffect } from "react"
import logo from './assets/images/logo.svg'




export default function Navbar(){
    const [backgroundColor, setBackgroundColor] = useState(false);
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setBackgroundColor("#ffffff");
        setTextColor("black");
      } else {
        setBackgroundColor(false);
        setTextColor("white");
      }
    });
  }, []);
    return(
        <>
        <nav className='nav'>
        <h1 className='header1'>SKY D</h1><img className='logo-nav' src={logo}/>
        <h1 className='Blog-tit'>Blog</h1>
        <h1 className='About-tit' style={{ color: textColor }}><Link to="About"spy={true} smooth={true} offset={50} duration={500} className="About-content1">About</Link></h1>
        <Linker to='/login'><h1 className='Login'>Login</h1></Linker>
        <button type='button' className='button-nav'>Claim now</button>
    </nav>
        </>
    )
}