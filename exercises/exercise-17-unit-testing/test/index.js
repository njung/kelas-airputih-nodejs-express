var app = require(__dirname + '/../index'); // Panggil instance dari aplikasi
var supertest = require('supertest');  // Pustaka untuk request http
var should = require('should'); // Pustaka untuk assertion
describe('Unit Test, dong', function() {
  describe('Just try', function() {
    it('should be true', function() {
      var x = true;
      should(x).equal(true);
    });
  });
  describe('Test the web', function() {
    it('should be able to login', function() {
      supertest(app)  // Request diinject ke app
      .post('/dologin')
      .type('form')
      .send({username : 'admin', password : 'admin'})
      .end(function(err, res){
        should(res.text).be.equal('Found. Redirecting to /');
      });
    });
    it('should be able to list notes', function() {
      supertest(app)
      .get('/')
      .set('Content-Type', 'application/json')
      .end(function(err, res){
        var json = JSON.parse(res.text);
        should(json.length).greater.than(0);
        should(json[0].title.length).greater.than(0);
      });
    });
    it('should be able to list notes', function() {
      supertest(app)
      .get('/')
      .set('Content-Type', 'application/json')
      .end(function(err, res){
        var json = JSON.parse(res.text);
        should(json.length).greater.than(1000);
      });
    });
  });
});
