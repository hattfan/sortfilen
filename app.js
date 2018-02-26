var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/public'));
//Store all HTML files in view folder.


// app.get('/',function(req,res){
//   res.sendFile('index.html');
//   //It will find and locate index.html from View or Scripts
// });

app.get('/',function(req,res){
  res.render('index.ejs');
  //It will find and locate index.html from View or Scripts
});

// app.get('/about',function(req,res){
//   res.sendFile('/about.html');
// });

// app.get('/sitemap',function(req,res){
//   res.sendFile('/sitemap.html');
// });

app.listen(8080);

console.log("Running at Port 8080");