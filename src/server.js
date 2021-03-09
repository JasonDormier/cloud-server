'use strict';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('You have hit home.');
});


module.exports = {
  app: app,
  start: function (port) {
    app.listen(port, () => {
      console.log('App is running on port : ' + port);
    });
  },
};
