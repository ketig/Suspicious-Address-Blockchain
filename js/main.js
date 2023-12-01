const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.trongrid.io/v1/accounts/address/transactions', options)
  .then(response => response.json())
  .then(response => console.log(response))
    .catch(err => console.error(err));