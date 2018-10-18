//load app with express
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('\public'))

app.use(morgan('short'));

app.get('/', (req, res) => {
console.log(req.query.s)
})

//local host
app.listen(3003, () => {
  console.log('server is up on 3003');
})

//api router
const router = express.Router()

router.get('/routes/api.js', (req, res) => {
  console.log('messege');
  res.end();
})

app.use(router)
