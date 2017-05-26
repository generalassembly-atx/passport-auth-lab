var passport = require('passport');
require("../config/passport")(passport)

function getLogin(request, response){
  var loginStrategy = passport.authenticate('facebook');
  return loginStrategy(request, response)
}

function getCallback(request, response){
  console.log("GOT CALL BACK");
  var callback = passport.authenticate('facebook', {
    successRedirect : '/candies',
    failureRedirect : '/candies'
  });
  return callback(request,response);
}

function logout(request, response) {
  request.logout();
  response.redirect('/candies');
}
module.exports = {
  getLogin: getLogin,
  getCallback: getCallback,
  logout: logout
}
