import { JSDOM } from 'jsdom';
import { get } from 'https';



const jsdom = JSDOM

export default async function DX() {
  return await new Promise((resolve, reject) => {
    var data = ['', '', '', ''];

    var resultdata = "";
    get("https://dxlite.g7vjr.org/", (res) => {

      if(res.statusCode != 200) { reject(res.statusCode); return;}

      res.on("data", (rawData) => { resultdata += rawData; });

      res.on("end", () => {

        let dom = new jsdom(resultdata);
        for (var i = 0; i < data.length; i++){
          var a;
          if(i === 3) a = i + 1;
          else a = i;

          data[i] = dom.window.document.getElementsByTagName("td")[a].textContent;
        }
        
        resolve(data)
        return;
      });
    
    });
  
  })

}
