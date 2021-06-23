import express from 'express';
import { join }from 'path';
import data from './getdxdata.js'
import hsp from 'heroku-self-ping';

hsp("https://docked19.herokuapp.com");

const PORT = process.env.PORT || 5000;
var listenmsg = '';

if (PORT === 5000) {
  listenmsg = "Listening on http://localhost:5000";
} else {
  listenmsg = `Listening on ${PORT}`;
}
var app = express();

app.enable('trust proxy')
app.set("views", join(process.cwd(), "/views"));
app.use(express.static('public'))
app.use("/favicon.ico", express.static('public/images/favicon.ico'));
app.use("/robots.txt", express.static('public/robots.txt'));
app.use(function(request, response, next) {
    if (process.env.NODE_ENV != 'development' && !request.secure) {
       return response.redirect("https://" + request.headers.host + request.url);
    }
    next();
})
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));
app.get("/ham", (req, res) => {
  res.render("pages/ham", {
    name: data()[0],
    freq: data()[1],
    dest: data()[2],
    time: data()[3],
  })
});
app.get("/threed", (req, res) => res.render("pages/threed"))
app.listen(PORT, () => console.log(listenmsg));

export default app;
