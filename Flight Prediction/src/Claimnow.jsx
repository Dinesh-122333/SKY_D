import logo from './assets/images/logo.svg'
import './assets/css/claim.css'
import { Link } from 'react-router-dom'
export default function Claimnow(){
    return(
        <>
         <nav className='claim-nav'>
        <Link to='/'><h1 className='claim-header'>SKY D</h1><img className='logo-nav' src={logo}/></Link>
        <h1 className='claim-Blog-tit'>Blog</h1>
        <h1 className='claim-About-tit'>About</h1>
        <h1 className='Login'>Login</h1>
        <button type='button' className='button-claim'>Claim now</button>
    </nav>
    <div className='Claim-background'>
    <div className='Claim-content'>
        <h1 className='Claim-header'>NEW CLAIM</h1>
        <h2 className='departure'>Departure Airport</h2>
        <input className='departure-input' type="text" placeholder='Enter departure airport' />
        <h2 className='arrival'>Arrival Airport</h2>
        <input className='arrival-input' type="text" placeholder='Enter arrival airport' />
        <h2 className='where'>Were there any stops?</h2>
        <input className='no-input' type="text" placeholder='NO(Direct flight)' />
        <input className='yes-input' type="text" placeholder='YES' />
        <h2 className='Airline-name'>Airline Name</h2>
        <input className='airline' type="text" placeholder='AIR INDIA' />
        <h2 className='Flight-number'>Flight Number</h2>
        <input className='Flight-no' type="text" placeholder='Flight Number' />
        <h2 className='Flight-Date'>Flight Date</h2>
        <input className='Flight-Date-in' type="text" placeholder='dd,mm,yyyy' />
        <Link to='/continue'><button className='Continue'>Continue</button></Link>

    </div>
    </div>
        </>
    )
}