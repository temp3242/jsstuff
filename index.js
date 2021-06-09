const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

if (PORT == 5000) {
  listenmsg = "Listening on http://localhost:5000";
} else {
  listenmsg = `Listening on ${PORT}`;
}

let app = express();

app.set("views", path.join(__dirname, "views"));
app.use("/favicon.ico", express.static("public/images/favicon.ico"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));
app.get("/ham", (req, res) => {
  (async function () {
    var data = await require("./getdxdata")();
    callsign = data[0];
    freq = data[1];
    dest = data[2];
    time = data[3];
    res.render("pages/ham", {
      name: callsign,
      freq: freq,
      dest: dest,
      time: time,
    });
  })();
});
app.listen(PORT, () => console.log(listenmsg));

module.exports = app;
