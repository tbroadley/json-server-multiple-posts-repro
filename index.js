var request = require('request-promise');

function get() {
}

function get() {
  var getOptions = {
    uri: 'http://localhost:3000/items',
    json: true
  };

  return request(getOptions)
    .then(response => console.log(response));
}

function post() {
  var postOptions = {
      method: 'POST',
      uri: 'http://localhost:3000/items',
      body: {},
      json: true // Automatically stringifies the body to JSON
  };

  return request(postOptions)
    .then(response => console.log(response));
}

Promise.all([post(), post()]).then(get);
