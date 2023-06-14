function calculatePivot() {
    var high = parseFloat(document.getElementById('high').value);
    var low = parseFloat(document.getElementById('low').value);
    var close = parseFloat(document.getElementById('close').value);

    if (!isNaN(high) && !isNaN(low) && !isNaN(close)) {
      var pivot = (high + low + close) / 3;
      var resistance1 = 2 * pivot - low;
      var resistance2 = pivot + (high - low);
      var support1 = 2 * pivot - high;
      var support2 = pivot - (high - low);

      document.getElementById('result').innerHTML =
        'Pivot: ' + pivot.toFixed(2) + '<br>' +
        'Resistance 1: ' + resistance1.toFixed(2) + '<br>' +
        'Resistance 2: ' + resistance2.toFixed(2) + '<br>' +
        'Support 1: ' + support1.toFixed(2) + '<br>' +
        'Support 2: ' + support2.toFixed(2);
    }
  }