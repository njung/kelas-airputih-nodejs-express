var mongoose = require('mongoose');
var userSchema = mongoose.Schema({ 
  username : String,
  password : String,
});
mongoose.model('user', userSchema); 
var usersModel = mongoose.model('user'); 

exports.create = function(obj, cb) {
  return usersModel.create({
    username : obj.username,
    password : obj.password,
  }, function(err, result){
    if (err) return cb(err);
    return cb();
  })
}

exports.update = function(id, obj, cb) {
  return usersModel.findById(id, function(err, user) {
    user.update({ 
      username : obj.username,
      password : obj.password,
    }, function(err){
     usersModel.findById(id, function(err, user) {
      if (err) return cb(err);
      return cb(null, user);
     })
    })
  })
}

exports.read = function(id, cb) {
  return usersModel.findById(id, function(err, result){
    if (err) return cb(err);
    return cb(null, result);
  });
}

exports.list = function(opt, cb) {
  usersModel.find(opt, function(err, result){
    if (err) return cb(err);
    return cb(null, result);
  });
}

exports.destroy = function(id, cb) {
  return usersModel.remove({_id: id}, function(err) { 
    if (err) return cb(err);
    return cb(null);
  })
}
