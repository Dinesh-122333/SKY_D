/* eslint-disable no-unused-vars */
import { Link as Linker } from 'react-router-dom'
import './assets/css/Front.css'
import logo from './assets/images/logo.svg'
import file from './assets/images/file.svg'
import setting from './assets/images/setting.svg'
import dollars from './assets/images/dollar.svg' 
import About from './About'
import Navbar from './Navbar'

export default function Frontpage(){
    return(
    <>
    {/* <nav className='Front-nav'>
        <h1 className='header1'>SKY D</h1><img className='logo-nav' src={logo}/>
        <h1 className='Blog-tit'>Blog</h1>
        <h1 className='About-tit'>About</h1>
        <Linker to='/login'><h1 className='Login'>Login</h1></Linker>
        <button type='button' className='button-nav'>Claim now</button>
    </nav> */}
    {/* <div className='back-in-front'>
        <img src={back} className='Front-Background'/>
    </div> */}
    <Navbar/>
    <div className='front-content'>
        <div className='inner-front-content'>

        <h1 className='inner-front-tit'>Flight Delay Prediction</h1>
        <p className='inner-front-description'>We can help you with your Flight delay, cancellation or denied boarding</p>
        <button type='button' className='inner-front-button1'><img src={logo} className='inner-logo'/>Departure Airport</button>
        <button type='button' className='inner-front-button2'><img src={logo} className='inner-logo'/>Final Destination</button>
        <button type='button' className='inner-front-button3'><img src={logo} className='inner-logo'/>Check</button>

    </div>
    </div>
    <div className='front-work'>
        <h1 className='work-tit'>How it Works</h1>
        <div className='file'>
            <img src={file} className='file-front'/>
            <h1 className='file-tit'>You give us your flight details</h1>
            <p className='file-description'>Enter your flight details and we will calculate how much compensation you are entitled to.</p>

        </div>
        <div className='setting'>
            <img src={setting} className='setting-front'/>
            <h1 className='setting-tit'>Enforce your rights</h1>
            <p className='setting-description'>Once we have all the necessary flight information, 
            we will do all it takes to get your compensation, 
            including lodging complaints with administrative bodies</p>

        </div>
        <div className='dollars'>
            <img src={dollars} className='dollars-front'/>
            <h1 className='dollars-tit'>Enforce your rights</h1>
            <p className='dollars-description'>Once we have all the necessary flight information, 
            we will do all it takes to get your compensation, 
            including lodging complaints with administrative bodies</p>

        </div>
    
    </div>
    <div className='List-of-content'>
        <h1 className='List-tit'>List of Today’s delayed flights</h1>
        <table className='list-of-table'>
        <tr className='table-of-list'>
            <th>Time Flight</th>
            <th>To/Via</th>
            <th>Gate No</th>
            <th>Info</th>
        </tr>
        <tr>
            <td>3:00 am <a className='flight-content'>AJ 8003</a></td>
            <td>Munich</td>
            <td className='gate-no'>35</td>
            <td className='delayed'>Delayed</td>
        </tr>
        <tr>
        <td>9:00 am <a className='flight-content'>EQ 6833</a></td>
            <td>Berlin</td>
            <td className='gate-no'>14</td>
            <td className='finalcall'>Mexico</td>
        </tr>
        <tr>
        <td>3:00 am <a className='flight-content'>AC 9094</a></td>
        <td>Frankfurt</td>
        <td className='gate-no'>19</td>
        <td className='boarding'>Boarding 2:45</td>
        </tr>
        <h1 className='see'>see more...</h1>
        </table>
    </div>
    <About/>
    <footer className="mainfooter" role="contentinfo">  
    <div className="footer-middle">  
    <div className="container">  
      <div className="row">  
        <div className="col-lg-5 col-md-4">  
          <div className="footer-pad">  
            <h4>SKY D<img className='logo-footer' src={logo}/></h4>  
                <p>
                The flight delay prediction service is not a substitute for the advice of a travel agent or airline.
You should always check with the airline for the most up-to-date information about your flight.
The flight delay prediction service is not responsible for any damages or losses that may occur as a result of using the service.
                </p> 
          </div>  
        </div>  
        <div className="col-md-3 col-sm-4 ">  
          <div className="footer-pad1">  
            <h4>About
            </h4>  
            <ul className="list-unstyled">  
              <li><a className='footer-description' href="#">Who we are</a> </li>  
              <li><a className='footer-description' href="#">Blog</a></li>  
              <li><a className='footer-description' href="#">FAQs</a></li>  
              <li><a className='footer-description' href="#">Patient Review</a></li>    
            </ul>  
          </div>  
        </div>  
        <div className="col-md-3 col-sm-6">  
          <div className="footer-pad2">  
            <h4> Reach Us </h4>  
            <ul className="list-unstyled">  
              <li> <a className='footer-description' href="#"> Partner With Us </a> </li>  
              <li> <a className='footer-description' href="#"> Contact Us</a> </li>  
              <li> <a className='footer-description' href="#">Location</a> </li>  
              <li> <a className='footer-description' href="#"> Work with us </a> </li>  
                
            </ul>  
          </div>  
        </div>  
          {/* <!-- <div class="col-md-3">  
              <h4> Follow Us </h4>  
              <ul class="social-network social-circle">  
               <li> <a href="#" class="icoFacebook" title="Facebook"> <i class="fa fa-facebook"> </i> </a> </li>  
               <li> <a href="#" class="icoLinkedin" title="Linkedin"> <i class="fa fa-linkedin"> </i> </a> </li>  
      <li> <a href="#"> <i class="fa fa-youtube" aria-hidden="true"> </i> </a> </li>  
              </ul>               
      </div>   --> */}
      </div>  
      <div className="row">  
      <div className="col-md-12 copy">  
      <p className="text-center"> © Copyright 2023 - Company Name.  All rights reserved. </p>  
      </div>  
      </div>  
    </div>  
    </div>  
  </footer>

    </>
    )
}