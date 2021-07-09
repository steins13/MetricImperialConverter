const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  test("Valid Input", (done) => {
    chai
      .request(server)
      .get("/api/convert?input=10L")
      .end((err, res) => {
        assert.equal(res.type, "application/json");
        assert.equal(res.body.returnUnit, "gal");
        assert.equal(res.body.returnNum, 2.64172);
        done();
      })
  })
  test("Invalid Input", (done) => {
    chai
      .request(server)
      .get("/api/convert?input=32g")
      .end((err, res) => {
        assert.equal(res.body, "invalid unit");
        done();
      })
  })
  test("Invalid Number", (done) => {
    chai
      .request(server)
      .get("/api/convert?input=3/7.2/4kg")
      .end((err, res) => {
        assert.equal(res.body, "invalid number");
        done();
      })
  })
  test("Invalid Number and Unit", (done) => {
    chai
      .request(server)
      .get("/api/convert?input=3/7.2/4kilomegregram")
      .end((err, res) => {
        assert.equal(res.body, "invalid number and unit");
        done();
      })
  })
  test("No Number", (done) => {
    chai
      .request(server)
      .get("/api/convert?input=kg")
      .end((err, res) => {
        assert.equal(res.type, "application/json");
        assert.equal(res.body.initNum, 1);
        done();
      })
  })
});
