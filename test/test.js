const chai = require('chai')
const expect = chai.expect();
let should = chai.should();
var request = require('request');
const bodyParser=require("body-parser");
var server= require('../app.js');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("Routing Testing", () => {

    it('Main page status', function(done) {
        chai.request(server)
            .get('/')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });
    
    it('About page status', function(done) {
        chai.request(server)
            .get('/about')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });

    it('Contact page status', function(done) {
        chai.request(server)
            .get('/contact')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });

    it('Hotels Page status', function(done) {
        chai.request(server)
            .get('/mumbai/hotels')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });

    it('Thank you page status', function(done) {
        chai.request(server)
            .get('/contact/thankyou')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });
})