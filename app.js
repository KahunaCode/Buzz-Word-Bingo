/* jshint esversion: 6 */

const express = require('express');
const app = express();
const router = express.Router();
const bp = require('body-parser');

app.use(bp.json());

app.use(express.static('public'));

var bw = [];

app.get('/buzzwords', (req,res) => {
  console.log("buzzwords here");
  res.send(bw);
});

app.post('/buzzword', (req,res) => {
  if (typeof req.body.buzzWord === "string" && typeof req.body.points === "number" && typeof req.body.heard === "boolean" ) {
    bw.push(req.body);
    console.log('bw is', bw);
    res.send(`{"success":true}`);
  }
  else {
    console.log("user = stupid. sent wrong thing");
    res.send(`{"success":false}`);
  }
});

app.put('/buzzword', (req,res) => {
  console.log("put up or shut up");
  if (typeof req.body.buzzWord === "string" && typeof req.body.points === "number" && typeof req.body.heard === "boolean") {
    bw.forEach((el) => {
      if (el.buzzWord === req.body.buzzWord) {
        el.points = req.body.points;
        console.log('bw is now', bw);
        res.end(`{ "success": true, newScore: ${el.points} }`);
      }
    });
  }
  else{
    console.log("user = stupid. sent wrong thing");
    res.send(`{"success":false}`);
  }
  res.end(`{"success": false}`);
});

app.delete('/buzzword', (req, res) => {
  console.log("deleteme");
  if (typeof req.body.buzzWord === "string" && typeof req.body.points === "number" && typeof req.body.heard === "boolean") {
    bw.forEach((el) => {
      if (el.buzzWord === req.body.buzzWord) {
        var idx = bw.indexOf(req.body.buzzWord);
        bw.splice(idx, 1);
        console.log('bw is now', bw);
        res.end(`{"success": true}`);
      }
    });
  }
  else{
    console.log("user = stupid. sent wrong thing");
    res.send(`{"success":false}`);
  }
  res.end(`{"success" : false}`);
});

app.post('/reset', (req, res) => {
    if (req.body.reset === true) {
      bw = [];
      console.log('bw deleted', bw);
      res.end(`{"success": true}`);
    }
});

const server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`server running on port ${port}`);
});
