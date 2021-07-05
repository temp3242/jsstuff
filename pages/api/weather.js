// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {get} from 'http';

export default function handler(req, res) {
  getData().then(result => res.status(200).json(result)).catch(error => {res.status(500).json({error: error})})
}

async function getData() {
  return await new Promise((resolve, reject) => {
      get(`http://api.openweathermap.org/data/2.5/weather?id=3397277&units=metric&appid=${process.env.OPENWEATHER_KEY}` , res => {
          var result = '';

          if(res.statusCode != 200) {reject(res.statusCode); return;}
            
          res.on('data', rawData => { result += rawData })

          res.on('end', () => {
              resolve(JSON.parse(result));
              return;
          })

      })
  })
}
