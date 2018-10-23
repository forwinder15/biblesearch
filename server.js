//load app with express
const express = require('express');
const app = express();
const morgan = require('morgan');
const esvRoute = require('./routes/esv');
//show frontend
app.use(express.static('\public'));
//show short issues
app.use(morgan('short'));

app.use('/', esvRoute);

//local host
app.listen(3003, () => {
  console.log('server is up on 3003');
});
