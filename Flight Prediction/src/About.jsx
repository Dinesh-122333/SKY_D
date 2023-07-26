import './assets/css/About.css'

export default function About(){
    return(
        <>
        <div className='About-content' id='About'>
        <div>
            <h1 className='About'>About us</h1>
            <p className='About-desription'>Welcome to SKY D, 
                your ultimate flight delay prediction site! 
                We are dedicated to providing you with the most 
                accurate and up-to-date information about flight delays, 
                ensuring that your travel experience is as smooth and 
                hassle-free as possible. At SKY D, we understand the frustration 
                and inconvenience that flight delays can cause, 
                and that's why we've made it our mission to help you stay informed and 
                prepared for any potential disruptions to your travel plans.</p>
        </div>
        <div className='left-side'>
            <h1 className='left-side-tit'>Our Vision</h1>
            <p className='left-side-description'>At SKY D, we envision a world where air travel is seamless and 
                stress-free. We strive to be the go-to platform for travelers 
                seeking reliable flight delay predictions, empowering them to make 
                informed decisions about their journeys. Through cutting-edge technology 
                and a passion for delivering exceptional service, we aim to revolutionize 
                the way people approach air travel and enhance their overall travel experience.</p>
        </div>
        <div className='middle-side'>
            <h1 className='middle-side-tit'>Our Mission</h1>
            <p className='middle-side-description'>Our mission at SKY D is simple: To provide travelers 
            with real-time flight delay predictions and valuable insights to help them plan their trips 
            with confidence. We aim to utilize the power of data analytics, machine learning, and 
            AI algorithms to forecast flight delays accurately. By leveraging this technology, we can 
            offer you timely information about potential disruptions, allowing you to adjust your plans, 
            make alternative arrangements, or simply prepare for a delay, should one occur</p>
        </div>
        <div className='right-side'>
            <h1 className='right-side-tit'>How SKY D Works</h1>
            <p className='right-side-description'><a className='About-highlight'>Data Collection:</a> We gather vast amounts of data from various sources, including airlines, airports, weather services, and historical flight records.

            <a className='About-highlight'>Data Analysis:</a> Our powerful AI algorithms process and analyze the collected data, identifying patterns and correlations that contribute to flight delays.

            <a className='About-highlight'>Prediction Generation:</a> Based on the analysis, we generate accurate flight delay predictions for a wide range of flights and routes.

</p>
        </div>
        </div>
        
        </>
    )
}