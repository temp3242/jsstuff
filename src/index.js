import express from 'express';
import { join }from 'path';
import DX from './getdxdata.js';
import weather from './weather.js';

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
  DX().then(result => {
    res.render("pages/ham", {
      name: result[0],
      freq: result[1],
      dest: result[2],
      time: result[3],
    })
  },
  () => { // If error (reject).
    res.status(500)
    res.render("pages/error")
  }
  )
});
app.get("/weather", (req,res) => {
  weather().then(result => {
    res.render("pages/weather", {
      temp: result.main.temp,
      feel: result.main.feels_like,
      humi: result.main.humidity,
      press: result.main.pressure
    })
  },
  () => { // If error (reject).
    res.status(500)
    res.render("pages/serverror")
  }
  )
});
app.get("/threed", (req, res) => res.render("pages/threed"));

app.get('*', function(req, res){ //Not Found Redirect.
  res.status(404);
  res.render("pages/notfound");
});
app.listen(PORT, () => console.log(listenmsg));

export default app;
