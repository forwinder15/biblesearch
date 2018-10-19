//load app with express
const express = require('express');
const app = express();
const morgan = require('morgan');
const fetch = require('node-fetch');

//show frontend
app.use(express.static('\public'));
//show short issues
app.use(morgan('short'));

app.get('/', (req, res) => { console.log(req.params.wordSearched)})

//local host
app.listen(3003, () => {
  console.log('server is up on 3003');
});

//api router
//const router = express.Router()

//router.get('/routes', (req, res) => {
  //console.log('messege');
  //res.end();
//})

//app.use(router)
