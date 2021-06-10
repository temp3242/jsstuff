let jsdom = require("jsdom").JSDOM;
let http = require("http");

var resultdata = "";
var data = [];

function getPromise() {
  return new Promise((resolve, reject) => {
    http.get("http://dxlite.g7vjr.org/", (res) => {
      res.on("data", (rawData) => {
        resultdata += rawData;
      });
      res.on("end", () => {
        resolve(resultdata);
        resultdata = "";
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
    data[0] = dom.window.document.getElementsByTagName("td")[0].textContent;
    data[1] = dom.window.document.getElementsByTagName("td")[1].textContent;
    data[2] = dom.window.document.getElementsByTagName("td")[2].textContent;
    data[3] = dom.window.document.getElementsByTagName("td")[4].textContent;
  } catch (error) {
    console.error(error);
  }
}
module.exports = async function () {
  await makeSynchronousRequest();
  return data;
};
