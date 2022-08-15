var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');


//used to serve static files from public
app.use(express.static('public'));
app.use(cors());

// create a user with mongodb
app.get('/account/create/:name/:email/:password', function (req, res) {
    // else create user
    dal.create(req.params.name,req.params.email,req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

// login user
app.get('/account/login/:email/:password', function (req, res) {
    dal.find(req.params.email).
        then((user) => {
            // if user exists, check password
            if (user.length > 0) {
                if (user[0].password === req.params.password) {
                res.send(user[0])
                } else {
                res.send('Login failed: wrong password')
                }
            } else {
                res.send('Login failed: user not found')
            }
        })
})

// update - deposit/withdraw amount
app.get('/account/update/:email/:amount', function (req, res) {
    var amount = Number(req.params.amount)
  
    dal.update(req.params.email, amount).then((response) => {
      console.log(response)
      res.send(response)
    })
})
  

// all accounts
app.get('/account/all', function(req,res){
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        })
});;

var port = 3000;
app.listen(port);
console.log("Running on port: " + port);