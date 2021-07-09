const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test("Whole number", () => {
    assert.isNumber(convertHandler.getNum("31mi"), "A number");
  })
  test("Decimal number", () => {
    assert.isNumber(convertHandler.getNum("3.1mi"), "A decimal number");
  })
  test("Fractional number", () => {
    assert.isNumber(convertHandler.getNum("10/5mi"), "A fractional number");
  })
  test("Fractional and Decimal number", () => {
    assert.isNumber(convertHandler.getNum("10/.5"), "A fractional and decimal");
  })
  test("Double-fraction", () => {
    assert.isNotNumber(convertHandler.getNum("10/10/mi"), "Double-fraction");
  })
  test("No numerical input", () => {
    assert.equal(convertHandler.getNum("mi"), 1, "No numerical input should be 1");
  })
  test("mi", () => {
    assert.equal(convertHandler.getUnit("31mi"), "mi", "Correct unit");
  })
  test("gal", () => {
    assert.equal(convertHandler.getUnit("31gal"), "gal", "Correct unit");
  })
  test("L", () => {
    assert.equal(convertHandler.getUnit("31L"), "L", "Correct unit");
  })
  test("km", () => {
    assert.equal(convertHandler.getUnit("31km"), "km", "Correct unit");
  })
  test("lbs", () => {
    assert.equal(convertHandler.getUnit("31lbs"), "lbs", "Correct unit");
  })
  test("kg", () => {
    assert.equal(convertHandler.getUnit("31kg"), "kg", "Correct unit");
  })
  test("Invalid unit", () => {
    assert.equal(convertHandler.getUnit("31invalidunit"), "invalid unit", "Not a valid unit");
  })
  test("Unit", () => {
    assert.isOk(convertHandler.getUnit("31mi"), "Valid Unit");
  })
  test("miles", () => {
    assert.equal(convertHandler.spellOutUnit("mi"), "miles", "Spelled out");
  })
  test("gallons", () => {
    assert.equal(convertHandler.spellOutUnit("gal"), "gallons", "Spelled out");
  })
  test("liters", () => {
    assert.equal(convertHandler.spellOutUnit("L"), "liters", "Spelled out");
  })
  test("kilometers", () => {
    assert.equal(convertHandler.spellOutUnit("km"), "kilometers", "Spelled out");
  })
  test("pounds", () => {
    assert.equal(convertHandler.spellOutUnit("lbs"), "pounds", "Spelled out");
  })
  test("kilograms", () => {
    assert.equal(convertHandler.spellOutUnit("kg"), "kilograms", "Spelled out");
  })
  test("gal to L", () => {
    assert.equal(convertHandler.getReturnUnit("gal"), "L", "Converted");
  })
  test("L to gal", () => {
    assert.equal(convertHandler.getReturnUnit("L"), "gal", "Converted");
  })
  test("mi to km", () => {
    assert.equal(convertHandler.getReturnUnit("mi"), "km", "Converted");
  })
  test("km to mi", () => {
    assert.equal(convertHandler.getReturnUnit("km"), "mi", "Converted");
  })
  test("lbs to kg", () => {
    assert.equal(convertHandler.getReturnUnit("lbs"), "kg", "Converted");
  })
  test("kg to lbs", () => {
    assert.equal(convertHandler.getReturnUnit("kg"), "lbs", "Converted");
  })
});
