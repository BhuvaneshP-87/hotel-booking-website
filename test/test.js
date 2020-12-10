const chai = require('chai')
const expect = chai.expect
var request = require('request');
const bodyParser=require("body-parser");

describe("Routing Testing", () => {

    it('Main page status', function(done) {
        request('http://localhost:3000' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    
    it('About page status', function(done) {
        request('http://localhost:3000/about' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Contact page status', function(done) {
        request('http://localhost:3000/contact' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Hotels Page status', function(done) {
        request('http://localhost:3000/hotels' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Thank you page status', function(done) {
        request('http://localhost:3000/contact/thankyou' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
})