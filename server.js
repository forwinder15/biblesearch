//load app with express
const express = require('express');
const app = express();
const morgan = require('morgan');
const fetch = require('node-fetch');

//show frontend
app.use(express.static('\public'));
//show short issues
app.use(morgan('short'));

app.get('/:wordSearched', (req, res) => {
  let word = req.params.wordSearched;
  console.log(word);
  fetch(`https://api.esv.org/v3/passage/search/?q=${word}`, {
      headers: {
        'Authorization': 'Token e9db23a61803d3ffcdb9c2caa5a8f3f2b98ca101' //ESV API Token
   }
})
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const number = myJson.total_results;
      console.log(number);
    //  const tag = document.querySelector(".tagg").innerHTML = `The word ${word} was used ${number} times!`;
      //return tag
      res.send(myJson); //cant send number??
    })
   .catch(function(error) {
     console.log('😮 There has been a problem with the fetch operation: ', error.message);
   })
});

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
