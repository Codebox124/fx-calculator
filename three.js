function calculatePipValue() {
    var accountType = document.getElementById("accountType").value;
    var tradeSize = parseFloat(document.getElementById("tradeSize").value);
    var pipValue = 0;
    
    if (accountType === "standard") {
      pipValue = tradeSize;
    } else if (accountType === "mini") {
      pipValue = tradeSize / 10;
    } else if (accountType === "micro") {
      pipValue = tradeSize / 100;
    }
    
    document.getElementById("pipValue").value = pipValue.toFixed(4);
  }
  