let state = [];
const btn = document.querySelector('#btn');
const price = document.querySelector('#price');
const Dollars = document.querySelector('#Dollars');
const Euros = document.querySelector('#Euros');
const Pounds = document.querySelector('#Pounds');

let request = () => {
  state = [];
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      state.push(JSON.parse(XHR.responseText));
      let dollars = state[0].bpi.USD.rate;
      document.querySelector('#price').innerHTML = `$${dollars}`;
    }
  };

  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
};

btn.addEventListener('click', function() {
  request();
  document.getElementById('Dollars').checked = true;
});

Dollars.addEventListener('click', function() {
  price.innerHTML = `$${state[0].bpi.USD.rate}`;
});

Euros.addEventListener('click', function() {
  price.innerHTML = `&euro;${state[0].bpi.EUR.rate}`;
});

Pounds.addEventListener('click', function() {
  price.innerHTML = `&pound;${state[0].bpi.GBP.rate}`;
});

request();
