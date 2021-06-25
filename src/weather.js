import { get } from 'http';

export default async function weather() {
    return await new Promise((resolve, reject) => {
        get(`http://api.openweathermap.org/data/2.5/weather?id=3397277&units=metric&appid=${process.env.OPENWEATHER_KEY}` , res => {
            var result = '';
            res.on('data', rawData => { result += rawData })

            res.on('end', () => {
                resolve(JSON.parse(result));
                return;
            })

            res.on('error', (err) => {
                reject(err);
                return;
            } )
        })
    })
}