/* jshint esversion: 6 */

const express = require('express');
const app = express();
const router = express.Router();
const bp = require('body-parser');

app.use(bp());

app.use(express.static('public'));

// router.route('/buzzwords')
//   .get((req,res) => {
//     console.log("buzzwords here");
//     res.send("buzzwords JSON thing should be sent");
//     res.end();
//   })
//   .post((req,res) => {
//     console.log("got buzzwords POST");
//     res.send({"success":true});
//   });


// {
//   buzzWord: String,
//   points: Number
//   heard: false
// }


var bw = [];


app.get('/buzzwords', (req,res) => {
  console.log("buzzwords here");
  //res.send("buzzwords JSON thing should be sent");
  res.send(bw);
});

app.post('/buzzwords', (req,res) => {
  //console.log(req.body);
  bw.push(req.body);
  console.log('bw is', bw);
  // console.log("got buzzwords POST");
  res.send({"success":true});
});

app.put('/buzzwords', (req,res) => {
  console.log("put up or shut up");
  if (bw.hasOwnProperty(req.body.buzzWord)) {
    bw[req.body.buzzWord] = req.body
  }
});

const server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`server running on port ${port}`);
});
