function calculatePositionSize() {
    var accountSize = parseFloat(document.getElementById("accountSize").value);
    var riskRatio = parseFloat(document.getElementById("riskRatio").value);
    var stopLoss = parseFloat(document.getElementById("stopLoss").value);
    var tradeSize = parseFloat(document.getElementById("tradeSize").value);
    
    var moneyUSD = accountSize * (riskRatio / 100) * (stopLoss / 100);
    var units = tradeSize * 100000; // Assuming 1 lot = 100,000 units
    var sizing = moneyUSD / stopLoss;
    
    document.getElementById("moneyUSD").textContent = moneyUSD.toFixed(2);
    document.getElementById("units").textContent = units.toFixed(2);
    document.getElementById("sizing").textContent = sizing.toFixed(2);
  }
  