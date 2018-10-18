const express = require('express');
const app = express();
//What happens when the enter key is pressed or the search button is clicked
function search(e) {
  const word = document.querySelector('.word').value;
//fetch the list of verses containing the word the user inputs
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
      const tag = document.querySelector(".tagg").innerHTML = `The word ${word} was used ${number} times!`;
      return tag
    })
    .catch(function(error) {
      console.log('😮 There has been a problem with the fetch operation: ', error.message);
    })
};
