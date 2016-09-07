var express         = require('express');
var path            = require('path');
var session         = require('express-session');
var app             = express();
var compression = require('compression');

app.use(compression());

app.get('/',
  function(req, res){
    app.use(express.static(__dirname))
    if (1 == 1){
      console.log(__dirname)
      res.sendFile(path.join(__dirname + '/index.html'),{ user: req.user });
    }else{
      res.redirect('/login')
    }
  });

var port = process.env.PORT || 5007;
app.listen(port, function() {
  console.log("Listening on " + port);
});

