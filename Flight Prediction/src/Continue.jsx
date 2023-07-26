/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import logo from './assets/images/logo.svg';
import React, { useState } from 'react'; // Import useState to store the random number
import './assets/css/Continue.css'

const generateRandom = () => {
  return Math.floor(Math.random() * 60);
};

export default function Continue() {
  const [randomNumber, setRandomNumber] = useState(null); // State to store the random number

  const generateNewRandomNumber = () => {
    const newRandomNumber = generateRandom();
    setRandomNumber(newRandomNumber);
  };

  return (
    <>
      <nav className='continue-nav'>
        <Link to='/'><h1 className='continue-header'>SKY D</h1><img className='logo-nav' src={logo}/></Link>
        <h1 className='continue-Blog-tit'>Blog</h1>
        <h1 className='continue-About-tit'>About</h1>
        <h1 className='Login'>Login</h1>
        <button type='button' className='button-continue' onClick={generateNewRandomNumber}>Claim now</button>
      </nav>

      <div className="back-content">
       <div className="content"> 
      <h1 className="continue-tit">PREDICTED PAGE</h1>
      
      <div className="delay-content">
        {randomNumber !== null ? (
          <>
            <h1 className="continue-change">Prediction of Flight Delay</h1>
            <p className="continue-value">The Flight delays <a className="highlight">{randomNumber} mins</a></p>
            <Link to='/proceed'><button className="back">back</button></Link>
          </>
        ) : (
          
          <p className="click">Click the <a className="highlight">"Claim now"</a> button to generate the delay of the flights.</p>
        )}
      </div>
      </div>
      </div>
    </>
  );
}
