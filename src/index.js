const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
var listenmsg = '';

if (PORT === 5000) {
  listenmsg = "Listening on http://localhost:5000";
} else {
  listenmsg = `Listening on ${PORT}`;
}
var app = express();

app.enable('trust proxy')
app.set("views", path.join(__dirname, "../views"));
app.use(express.static('public'))
app.use("/favicon.ico", express.static('public/images/favicon.ico'));
app.use(function(request, response, next) {
    if (process.env.NODE_ENV != 'development' && !request.secure) {
       return response.redirect("https://" + request.headers.host + request.url);
    }
    next();
})
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));
app.get("/ham", (req, res) => {
  var data = require("./getdxdata")();
  res.render("pages/ham", {
    name: data[0],
    freq: data[1],
    dest: data[2],
    time: data[3],
  })
});
app.get("/threed", (req, res) => res.render("pages/threed"))
app.listen(PORT, () => console.log(listenmsg));

module.exports = app;
