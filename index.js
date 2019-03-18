const express = require('express')
var Tesseract = require('tesseract.js')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/work', (req, res) => {
  Tesseract.recognize('book_page.jpg')
  .progress(function  (p) { console.log('progress', p)  })
  .then(function (result) {
    console.log('result', result.text)
    res.send('done')
  }).catch(err => res.send(err))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

