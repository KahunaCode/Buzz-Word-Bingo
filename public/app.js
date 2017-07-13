/* jshint esversion: 6 */

const express = require('express');
const app = express();





const server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`server running on port ${port}`);
});