let jsdom = require ('jsdom').JSDOM
let fs = require('fs')
var tds


fs.readFile('output.html', {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err
    
    JSDOM = new jsdom(data)

    const { window } = JSDOM

    const table = JSDOM.window.document.getElementsByTagName("td")[1]
    console.log(table.textContent)
    
})
