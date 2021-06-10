let jsdom = require("jsdom").JSDOM;
let http = require("http");

var data = [];

module.exports = function getData() {
  var resultdata = "";
  http.get("http://dxlite.g7vjr.org/", (res) => {
    res.on("data", (rawData) => {
      resultdata += rawData;
    });
    res.on("end", () => {
      let dom = new jsdom(resultdata);
      data[0] = dom.window.document.getElementsByTagName("td")[0].textContent;
      data[1] = dom.window.document.getElementsByTagName("td")[1].textContent;
      data[2] = dom.window.document.getElementsByTagName("td")[2].textContent;
      data[3] = dom.window.document.getElementsByTagName("td")[4].textContent;
    });
    res.on("error", (error) => {
      throw error;
    });
  });
  return data;
};
