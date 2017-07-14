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
  bw.forEach((el) => {
    if (el.buzzWord === req.body.buzzWord) {
      el.points = req.body.points;
      console.log('bw is now', bw);
      res.end(`{ "success": true, newScore: ${el.points} }`);
    }
    // else{
    //   res.send('false');
    // }
  });
  res.end(`{"success": false}`);
});

app.delete('/buzzwords', (req, res) => {
  console.log("deleteme");
  bw.forEach((el) => {
    if (el.buzzWord === req.body.buzzWord) {
      var idx = bw.indexOf(req.body.buzzWord);
      bw.splice(idx, 1);
      console.log('bw is now', bw);
      res.end(`{"success": true}`);
    }
  });
  res.end(`{"success" : false}`);
});


const server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`server running on port ${port}`);
});
