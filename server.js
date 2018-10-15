//load app with express
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('\public'))

app.use(morgan('short'));

app.post('/', (req, res) => {
  const word = req.body.word_search;
  console.log(word);
})

app.get('/', (req, res) => {
console.log('responing to root');
})

//local host
app.listen(3003, () => {
  console.log('server is up on 3003');
})
