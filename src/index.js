import express from 'express';
import weather from './weather.js';
import crypto from 'crypto';

const PORT = process.env.PORT || 5000;
var listenmsg = '';

if (PORT === 5000) {
  listenmsg = "Listening on http://localhost:5000";
} else {
  listenmsg = `Listening on ${PORT}`;
}
var app = express();

app.enable('trust proxy')
app.use(express.static('public'))
app.use("/favicon.ico", express.static('public/images/favicon.ico'));
app.use("/robots.txt", express.static('public/robots.txt'));
app.use((request, response, next) => {
    if (process.env.NODE_ENV != 'development' && !request.secure) {
       return response.redirect("https://" + request.headers.host + request.url);
    }
    next();
})
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));
app.get("/ham", (req, res) => {
    const nonce = crypto.randomBytes(32).toString("base64");
    const csp = `script-src 'nonce-${nonce}' 'strict-dynamic' https:; object-src 'none'; base-uri 'none';`
    res.set("Content-Security-Policy", csp).render("pages/ham", {nonce: nonce})
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
    res.render("pages/errors/serverror")
  }
  )
});
app.get("/threed", (req, res) =>{
  const nonce = crypto.randomBytes(32).toString("base64");
  const csp = `script-src 'nonce-${nonce}' 'strict-dynamic' https:; object-src 'none'; base-uri 'none';`
  res.set("Content-Security-Policy", csp)
  res.render("pages/threed", {nonce: nonce});
})

app.get('*', function(req, res){ //Not Found Redirect.
  res.status(404);
  res.render("pages/errors/notfound");
});
app.listen(PORT, () => console.log(listenmsg));

export default app;
