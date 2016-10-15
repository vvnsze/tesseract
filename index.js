var Tesseract = require('tesseract.js')

Tesseract.recognize('book_page.jpg')
.then(function(result){
    console.log(result)
})
