const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

if (PORT == 5000) {
  listenmsg = "Listening on http://localhost:5000";
} else {
  listenmsg = `Listening on ${PORT}`;
}

 express()
 .set("views", path.join(__dirname, "../views"))
 .use("/favicon.ico", express.static("public/images/favicon.ico"))
 .set("view engine", "ejs")
 .get("/", (req, res) => res.render("pages/index"))
 .get("/ham", (req, res) => {
   (async function () {
     var data = await require("../getdxdata")();
     res.render("pages/ham", {
       name: data[0],
       freq: data[1],
       dest: data[2],
       time: data[3],
     });
   })();
 })
 .listen(PORT, () => console.log(listenmsg))

module.exports = express
