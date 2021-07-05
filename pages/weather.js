import Head from 'next/head';
import Script from 'next/script';
import style from '../styles/weather.module.css'

export default function Weather() {
    return(<>
        <Head>
        <title>Weather</title>    
        </Head>
    
        <style jsx>{`
        html, body{
        height: 100%;
        }
        
        `}</style>

        <div id={style.headerimage}>
            <div id={style.headertext}><h1>Weather</h1></div>
        </div>

        <div className={style.data}>
         <br/>
        <div><b>Weather at João Pessoa, BR (Refreshes every 15 minutes):</b></div>
        <br/>
        <div><b>Temp: </b><span id="temp"> </span></div>
        <br/>
        <div><b>Feels Like: </b><span id="feel"> </span></div>
        <br/>
        <div><b>Humidity: </b><span id="humi"> </span></div>
        <br/>
        <div><b>Pressure: </b><span id="press"> </span></div>
        <br/>      
        </div>

        <button onClick={() => {location.href = "/"}}>Back to Index</button>
    
        <Script src="/js/weather.js"/>
    
    </>);
}