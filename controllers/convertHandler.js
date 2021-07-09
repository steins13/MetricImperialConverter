function ConvertHandler() {
  
  this.getNum = function(input) { 
    let result = input.split(/[a-zA-Z]+/).filter(Boolean)

    if (result.length === 0) {
      return 1
    }
    if (result[0].indexOf("/") !== -1) {
      let arr = result[0].split("/")
      if (arr.length > 2) {
        return "invalid number"
      }
      if (arr[0] == 0 || arr[1] == 0 || arr.filter(Boolean).length == 0) {
        return "invalid number"
      }
      result[0] = (arr[0] / arr[1])
    }
    if (result.length > 1 || result[0] <= 0) {
      return "invalid number"
    } 
    if (result[0][0] === ".") {
      result[0] = "0" + result[0] 
    }

    return parseFloat(result[0])
  };
  
  this.getUnit = function(input) {
    let result = input.split(/[0-9]+/).filter(Boolean)
    let index = input.indexOf(result[result.length - 1])
    
    result = input.slice(index).toLowerCase();
    if (result === "l") {
      result = "L"
    }

    switch(result) {
      case "gal":
        return result
      case "L":
        return result;
      case "lbs":
        return result;
      case "kg":
        return result;
      case "mi":
        return result;
      case "km":
        return result;
      default:
        return "invalid unit"
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit) {
      case "gal":
        return "L"
      case "L":
        return "gal";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      case "mi":
        return "km";
      case "km":
        return "mi";
      default:
        return "invalid unit"
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case "gal":
        return "gallons";
      case "l":
        return "liters";
      case "L":
        return "liters";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      default:
        return "invalid unit";
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if (initUnit === "gal") {
      result = initNum * galToL;
    } else if (initUnit === "L") {
      result = initNum / galToL;
    } else if (initUnit === "lbs") {
      result = initNum * lbsToKg;
    } else if (initUnit === "kg") {
      result = initNum / lbsToKg;
    } else if (initUnit === "mi") {
      result = initNum * miToKm;
    } else if (initUnit === "km") {
      result = initNum / miToKm;
    } 
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;
    return result;
  };

}

module.exports = ConvertHandler;
