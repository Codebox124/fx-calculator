function calculateRiskOfRuin() {
    var winRate = parseFloat(document.getElementById('win-rate').value);
    var riskReward = parseFloat(document.getElementById('risk-reward').value);
    var capital = parseFloat(document.getElementById('capital').value);
    var numTrades = parseFloat(document.getElementById('num-trades').value);

    if (!isNaN(winRate) && !isNaN(riskReward) && !isNaN(capital) && !isNaN(numTrades)) {
      var winProbability = winRate / 100;
      var lossProbability = 1 - winProbability;
      var averageWinAmount = riskReward * capital;
      var averageLossAmount = capital;
      var expectedReturn = winProbability * averageWinAmount - lossProbability * averageLossAmount;
      var variance = winProbability * Math.pow(averageWinAmount - expectedReturn, 2) +
        lossProbability * Math.pow(averageLossAmount - expectedReturn, 2);
      var standardDeviation = Math.sqrt(variance);
      var riskOfRuin = Math.pow((capital - expectedReturn) / (standardDeviation * Math.sqrt(numTrades)), numTrades);

      document.getElementById('result').textContent = 'Risk of Ruin: ' + (riskOfRuin * 100).toFixed(2) + '%';
    }
  }