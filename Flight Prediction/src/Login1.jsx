
import { Link } from "react-router-dom"
import './assets/css/login.css'
import logo from './assets/images/logo.svg'

export default function Login(){
    return(
        <>
        <nav className='login-nav'>
        <h1 className='login-header'>SKY D</h1><img className='logo-nav' src={logo}/>
        <h1 className='login-Blog-tit'>Blog</h1>
        <h1 className='login-About-tit'>About</h1>
        <Link to="/"><h1 className='Logout'>Logout</h1></Link>
        <button type='button' className='button-login'>Claim now</button>
    </nav>
    <div className='login-content'>
        <div className='login-main' >
            <h1 className='login-tit'>LOGIN</h1>
            
            <input className="Login-mail" type='Search' placeholder="Email *" aria-label="Search"/><br/><br/>
            <input className="Login-psw" type='Password' placeholder="Password *" aria-label="Search"/><br/><br/>
            <input className='check' type='checkbox'/>
            <p className='remember'>Remember me</p>
            <Link to='/proceed'><button className='sign-in'>Sign In</button></Link>
            <Link to="/adminlogin"><h1 className='admin-login'>Admin login  click HERE</h1></Link>
            <p className='login-description'>This is for registered users only. If you do not have an account
                , check whether you are eligible for compensation first. 
                If you are eligible, you will be invited to open an account.
            </p>
        </div>

    </div>
        </>
    )
}