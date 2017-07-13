/* jshint esversion: 6 */

const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('public'));


router.route('/')
  .get((req,res) => {
    console.log("buzzwords here");
    res.send("buzzwords JSON thing should be sent");
  })
  .post((req,res) => {
    console.log("got buzzwords POST");
    res.send({"success":true});
  });




// app.get('/buzzwords', (req,res) => {
//   console.log("buzzwords here");
//   res.send("buzzwords JSON thing should be sent");
// });

// app.post('/buzzwords', (req,res) => {
//   console.log("got buzzwords POST");
//   res.send({"success":true});
// });

const server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`server running on port ${port}`);
});
