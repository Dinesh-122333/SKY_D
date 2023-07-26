import './assets/css/adminlogin.css'
import { Link } from "react-router-dom"
import logo from './assets/images/logo.svg'
export default function Adminlogin(){
    return(
        <>
        <nav className='adminlogin-nav'>
        <h1 className='adminlogin-header'>SKY D</h1><img className='logo-nav' src={logo}/>
        <h1 className='adminlogin-Blog-tit'>Blog</h1>
        <h1 className='adminlogin-About-tit'>About</h1>
        <Link to='/login'><h1 className='Login'>Login</h1></Link>
        <button type='button' className='button-adminlogin'>Claim now</button>
    </nav>
    <div className='adminlogin-content'>
        <div className='adminlogin-main' >
            <h1 className='adminlogin-tit'>ADMIN LOGIN</h1>
            
            <input className="adminlogin-mail" type='Search' placeholder="Email *" aria-label="Search"/><br/><br/>
            <input className="adminlogin-psw" type='Search' placeholder="Password *" aria-label="Search"/><br/><br/>
            <input className='adminlogin-check' type='checkbox'/>
            <p className='adminlogin-remember'>Remember me</p>
            <button className='adminlogin-sign-in'>Sign In</button>
            
        </div>

    </div>
        </>
    )
}