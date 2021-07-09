'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route("/api/convert")
    .get((req, res) => {
      let input = req.query.input

      if (convertHandler.getNum(input) === "invalid number" && convertHandler.getUnit(input) === "invalid unit") {
        res.json("invalid number and unit")
      } else if (convertHandler.getNum(input) === "invalid number") {
        res.json("invalid number")
      } else if (convertHandler.getUnit(input) === "invalid unit") {
        res.json("invalid unit")
      } else {
        res.json({
          initNum: convertHandler.getNum(input),
          initUnit: convertHandler.getUnit(input),
          returnNum: convertHandler.convert(convertHandler.getNum(input), convertHandler.getUnit(input)),
          returnUnit: convertHandler.getReturnUnit(convertHandler.getUnit(input)),
          string: convertHandler.getString(convertHandler.getNum(input), convertHandler.spellOutUnit(convertHandler.getUnit(input)), convertHandler.convert(convertHandler.getNum(input), convertHandler.getUnit(input)), convertHandler.spellOutUnit(convertHandler.getReturnUnit(convertHandler.getUnit(input))))
        })
      }
    })
};
