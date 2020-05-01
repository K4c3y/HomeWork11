
// required modules 
const express = require('express'); 


//calling express
const app  = express();


app.set('view engine', 'ejs');

// root urk (/)
app.get('/', function(req, res){
    res.render('index');
 });

   


// server is listening on port 3000 

app.listen(3000, function () {
    console.log('example app listing on port 3000')
})