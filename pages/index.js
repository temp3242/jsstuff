import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/index.module.css'

export default function App() {
  return (<>
    <Head>
      <title>Arthur's Test Website</title>
    </Head>

    <h1 className={style.heading}>Hello!</h1>
    <div id={style.greet}>Welcome to my Website!</div>
    
    <div id={style.links}>
    <Link href="/ham">
    <a>Ham Radio</a>
    </Link><br/>
    <Link href="/weather">
      <a>Weather</a>
    </Link><br/>
    <Link href="/threed">
      <a>3D</a>
    </Link><br/>

    <Image src="https://github.com/temp3242/jsstuff/workflows/Node.js%20Checks%20and%20Deploy/badge.svg" height={20} width={228} alt="Continous Intergration Status"/>
    </div>

    
</>)}