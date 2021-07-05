import Head from 'next/head';
import Script from 'next/script';

export default function threed(){
    return(<>
        <Head>
            <title>3D!</title>
        </Head>

    <canvas id="bg"/>
    <Script src="/js/3d/3d.js" />

    </>);
}