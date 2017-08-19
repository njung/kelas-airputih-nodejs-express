require('./db'); // Inisiasi db
var express = require('express'); // panggil modul express
var app = express(); // Inisiasi express

var mongoose = require('mongoose');
var timestampSchema = mongoose.Schema({  // Buat skema koleksi
  path : String,
  timestamp : String,
});
var timestampModel = mongoose.model('Timestamp', timestampSchema); // Inisiasi skema koleksi

// Router
app.get('/', function(req, res) { // Tangani route '/'
  // Saat route ini diakses, sebuah objek akan disimpan ke DB, lalu ditarik kembali semuanya dan diekpos ke response.
  var now = (new Date()).toString();
  var ts = {
    path : '/',
    timestamp : now,
  }
  timestampModel.create(ts, function(){ // simpan objek ke DB
    console.log('yo');
    timestampModel.find(function(err, result){  // ambil semua data koleksi timestamp dari DB
      res.send(result.reverse());
    });
  });
});

app.listen(3000, function() { // Jalanin
  console.log('Webnya udah jalandong. Cek TKP.'); // Sudah benar-benar jalan
});
