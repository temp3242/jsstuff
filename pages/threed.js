import Head from 'next/head';
import Script from 'next/script';
import style from '../styles/threed.module.css';

export default function threed(){
    return(<>
        <Head>
            <title>3D!</title>
        </Head>

    <canvas className={style.bg} id="bg"/>
    <Script src="/js/3d/3d.js" />

    </>);
}