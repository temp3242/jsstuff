import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import style from '../styles/ham.module.css';

export default function Ham() {
    return(<>
    

    <Head>
        <title>Ham Radio Stuff</title>
        <meta name="description" content="Data related to amateur radio."/>
    </Head>
    
    <style jsx>{`
    html, body{
        height: 100%;
    }
    
    `}</style>

    <div id={style.headercontainer}>
        <div id={style.headerimage}><Image src="/images/ham.webp" width={2306} height={1297} alt="Amateur Radio Equipment"/></div>
        <div id={style.headertext}><h1>Ham Radio</h1></div>
    </div><br />

    <Data />
    
    <Script src="/js/ham.js" />

    <div id={style.container}>
        <div id={style.item}><Image src="https://www.hamqsl.com/solar101vhfpic.php?image=random" width={615} height={148} alt="Solar-Terrestrial Data" /></div>
        </div>
    
    <button onClick={() => {location.href = "/"}}>Back to Index</button>

    </>)
}

function Data() {
    return(<>

    <div><b>Most recent DX call from <a href="https://www.hamqth.com/dxcluster.php" rel="noreferrer" target="_blank">HamQTH</a> (Refreshes every 15 seconds):</b></div>
    <br/>
    <div><b>Calling: </b><span id="call"></span> <a id="qrzcall" href="https://www.qrz.com/db/" rel="noreferrer" target="_blank">(See on QRZ.com)</a></div>
    <br/>
    <div><b>Freq: </b><span id="freq"></span></div>
    <br/>
    <div><b>Dest: </b><span id="dest"></span> <a id="qrzdest" href="https://www.qrz.com/db/" rel="noreferrer" target="_blank">(See on QRZ.com)</a></div>
    <br/>
    <div><b>Time: </b><span id="time"></span></div>
    <br/>
    </>);
}