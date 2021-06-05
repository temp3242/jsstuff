const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

let app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/svg', (req, res) => res.render('pages/svg'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

module.exports = app