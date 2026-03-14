function intToHex(d) {
      let number = (+d).toString(16).toUpperCase()
      if( (number.length % 2) > 0 ) { number= "0" + number }
      return number
}

function ramAddressChange(value) {
    var invalid = false
    var hexified = parseInt(value, 16);
    var index = 0;
    if (hexified<0x8016E000) {
        invalid = true
    }
    else if (hexified<0x80246000) {
        var final = ".orga 0x"+intToHex(hexified - 0x7FF4FB40);
        index = 1
    }
    else if (hexified<0x80377800) {
        var final = ".orga 0x"+intToHex(hexified - 0x80245000);
        index = 2;
    }
    else if (hexified<0x80385F88){
        var final = ".orga 0x"+intToHex(hexified - 0x80283280);
        index = 3;
    }
    if (invalid == false) {
        document.getElementById("orga-display").innerHTML = final;
    }
    else {
        document.getElementById("orga-display").innerHTML = "Invalid input!";
    }
    if (index==0) {
        document.getElementById("rom-block-1").style.borderColor = "#d9a3ff";
        document.getElementById("rom-block-2").style.borderColor = "#d9a3ff";
        document.getElementById("rom-block-3").style.borderColor = "#d9a3ff";
    }
    else if (index==1) {
        document.getElementById("rom-block-1").style.borderColor = "#00b83a";
        document.getElementById("rom-block-2").style.borderColor = "#d9a3ff";
        document.getElementById("rom-block-3").style.borderColor = "#d9a3ff";
    }
    else if (index==2) {
        document.getElementById("rom-block-1").style.borderColor = "#d9a3ff";
        document.getElementById("rom-block-2").style.borderColor = "#00b83a";
        document.getElementById("rom-block-3").style.borderColor = "#d9a3ff";
    }
    else if (index==3) {
        document.getElementById("rom-block-1").style.borderColor = "#d9a3ff";
        document.getElementById("rom-block-2").style.borderColor = "#d9a3ff";
        document.getElementById("rom-block-3").style.borderColor = "#00b83a";
    }
}