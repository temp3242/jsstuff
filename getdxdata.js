let jsdom = require("jsdom").JSDOM;
let http = require("http");

var data = "";
var callsign = [];

function getPromise() {
  return new Promise((resolve, reject) => {
    http.get("http://dxlite.g7vjr.org/", (res) => {
      res.on("data", (rawData) => {
        data += rawData;
      });
      res.on("end", () => {
        resolve(data);
        data = "";
      });
      res.on("error", (error) => {
        reject(error);
      });
    });
  });
}

async function makeSynchronousRequest() {
  try {
    let http_promise = getPromise();
    let response_body = await http_promise;
    let dom = new jsdom(response_body);
    callsign[0] = dom.window.document.getElementsByTagName("td")[0].textContent;
    callsign[1] = dom.window.document.getElementsByTagName("td")[1].textContent;
    callsign[2] = dom.window.document.getElementsByTagName("td")[2].textContent;
    callsign[3] = dom.window.document.getElementsByTagName("td")[4].textContent;
  } catch (error) {
    console.error(error);
  }
}
module.exports = async function () {
  await makeSynchronousRequest();
  return callsign;
};
