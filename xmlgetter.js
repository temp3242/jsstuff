let jsdom = require("jsdom").JSDOM;

jsdom.fromURL("http://dxlite.g7vjr.org").then((dom) => {
    console.log(dom.window.document.getElementsByTagName("td")[0].textContent)
  });
