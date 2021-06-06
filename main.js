const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

if (PORT == 5000) {listenmsg = 'Listening on http://localhost:5000'}
else {listenmsg = `Listening on ${ PORT }`}

let app = express()

app.set('views', path.join(__dirname, 'views'))
app.use('/favicon.ico', express.static('public/images/favicon.ico'));
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/svg', (req, res) => res.render('pages/svg'))
app.listen(PORT, () => console.log(listenmsg))

module.exports = app