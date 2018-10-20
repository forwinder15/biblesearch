const express = require('express');
const app = express();

  fetch(`https://api.esv.org/v3/passage/search/?q=${word}`, {
      headers: {
        'Authorization': 'Token e9db23a61803d3ffcdb9c2caa5a8f3f2b98ca101' //ESV API Token
      });
