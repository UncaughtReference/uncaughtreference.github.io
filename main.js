function toHex2(buffer) {
  return Array.prototype.map.call(buffer, x => ('00' + x.toString(16)).slice(-2)).join('');
}

function ramAddressChange(value) {
    // Convert string to hexadecimal
    var combinedValue = 0;
    var convertedValue = 0;
    value = value.toUpperCase();
    for (var i = 0; i < value.length; i++) {
        switch (value.charAt(i)) {
            case "0":
                convertedValue = 0;
                break;
            case "1":
                convertedValue = 1;
                break;
            case "2":
                convertedValue = 2;
                break;
            case "3":
                convertedValue = 3;
                break;
            case "4":
                convertedValue = 4;
                break;
            case "5":
                convertedValue = 5;
                break;
            case "6":
                convertedValue = 6;
                break;
            case "7":
                convertedValue = 7;
                break;
            case "8":
                convertedValue = 8;
                break;
            case "9":
                convertedValue = 9;
                break;
            case "A":
                convertedValue = 10;
                break;
            case "B":
                convertedValue = 11;
                break;
            case "C":
                convertedValue = 12;
                break;
            case "D":
                convertedValue = 13;
                break;
            case "E":
                convertedValue = 14;
                break;
            case "F":
                convertedValue = 15;
                break;
        }
    }
    //hexified = toHex2(hexified);
    document.getElementById("orga-display").innerHTML = combinedValue;
    console.log(combinedValue)
}