$(document).ready(function() {
    // Fetch the list of available currencies from the API
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then(response => response.json())
      .then(data => {
        var currencies = Object.keys(data.rates);
        
        // Enable autocomplete for the currency input fields
        $("#fromCurrency, #toCurrency").autocomplete({
          source: currencies
        });
      })
      .catch(error => {
        console.log("Error:", error);
      });
  });
  
  function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("fromCurrency").value.toUpperCase();
    var toCurrency = document.getElementById("toCurrency").value.toUpperCase();
    
    // API endpoint for currency conversion
    var apiUrl = "https://api.exchangerate-api.com/v4/latest/" + fromCurrency;
    
    // Send a GET request to the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var rate = data.rates[toCurrency]; // Exchange rate from the source currency to the target currency
        var convertedAmount = amount * rate;
        document.getElementById("result").innerHTML = amount + " " + fromCurrency + " = " + convertedAmount.toFixed(2) + " " + toCurrency;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
  