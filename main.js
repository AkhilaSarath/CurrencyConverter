const select = document.querySelectorAll(".currency")
const btn = document.getElementById("btn")
const input = document.getElementById("amount")
const result = document.getElementById("new_amount")

var myHeaders = new Headers();
myHeaders.append("apikey", "Nwc6pEXkSOOZg0oUm27GDXXky1Kwrmhb");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://data.fixer.io/api/symbols?access_key=apikey`, requestOptions)
  .then(response => response.json())
  .then(data => displayData(data))
  .catch(error => console.log('error', error));

function displayData(data) {
  console.log(data);
  const entries = Object.entries(data)
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

function convert() {
  currencyTo = to.value
  currencyFrom = from.value
  amount1 = amount.value
  fetch(`https://api.apilayer.com/fixer/convert?to=${currencyTo}&from=${currencyFrom}&amount=${amount1}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



