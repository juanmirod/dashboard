var express = require('express');
var app = express();

/**
 * Fake server for the dashboard application.
 * It creates employees, sells and issues data over time to simulate a real
 * situation. It also exposes an API to check this data both in JSON and CSV formats.
 * 
 * employees: they have a name, location (as a string adddress) and entry date (as a UNIX timestamp).
 * customers/sells: name of the customer/company, email address, buy date
 * issues: submission timestamp, customer name, customer email, description, 
 * open/closed status, closed timestamp, employee name
 */
const names = ['Sofía', 'María', 'Karen', 'Noa', 'Hillary', 'Carmen',
  'Susan', 'Amanda', 'Lisa', 'Itziar', 'Naia', 'Anne', 'Rebecca'];
const locations = ['Málaga', 'Logroño', 'London', 'Brighton', 'Zurich', 'Berlin', 
  'Bergen', 'Brussels', 'Paris'];
const fields = ['Accounting', 'Software', 'Consulting', 'Plumbing', 'Repairs', 'Furniture',
  'Books', 'Real State', 'Televisions'];
var employees = [];
var customers = [];
var issues = []; 

function chooseRandomFrom(array) {
  return array[Math.floor(Math.random()*array.length)];
}

function generateEmployee() {
  return {
    name: chooseRandomFrom(names),
    location: chooseRandomFrom(locations),
    entryDate: getRandomDate()
  }
}

function getRandomDate() {
  return Date.now();
}

function generateCustomer() {
  var field = chooseRandomFrom(fields);
  var name = chooseRandomFrom(names);
  return {
    name: field + ' ' + name,
    email: field+name+'@email.com',
    buyDate: getRandomDate()
  }
}

// generate 10 employees as a baseline
/*[...Array(10).keys()].forEach((item) => {
  employees.push(generateEmployee());
});*/

for (let c=0; c < 10; c++) {
  employees.push(generateEmployee());
}

// then generate a new employe every minute
setInterval(() => {
  employees.push(generateEmployee());
}, 500);

// generate 500 customers as a baseline
for(let c=0; c < 50; c++) {
  customers.push(generateCustomer());
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/employees', function(req, res) {
  res.send(JSON.stringify(employees));
});

app.get('/customers', function(req, res) {
  res.send(JSON.stringify(customers));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

