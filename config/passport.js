var User = require('../models/user');
var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs')
const passport = require('passport');

console.log('loading here 7')

module.exports = function(passport) {
    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
      }
    
    function generateHash(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
       }

       console.log('loading here 2')

    // passport link to login page

passport.use('login', new LocalStrategy({
    passCallback : true
  },
  
  function passportCode(req, username, password, done) { 
    console.log('loading here 10')

    // check db for username
    User.findOne({ 'project-3' :  username }, 
      function(err, user) {
      
        if (err) 
          return done(err);
        // If username is not in db, send sign up required message
        if (!user){
          console.log('Sign up required');      
          console.log('loading here 9')        
          return done(false)
          }
        // Incorrect password
        if (!isValidPassword(user, password)){
          console.log('Invalid Password');
          return done(null, false, 
              console.log('Invalid Password'));         //********** //delete when working  
        }
        // Successful login
        return done(null, user);
      }
    );
}));

    passport.use('signup', new LocalStrategy({
        passCallback : true 
    },
    function(req, username, password, done) {

        process.nextTick(function() {

        // Check if exists

        User.findOne({ 'username' :  username }, function(err, user) {

            // Return error
            if (err) {
                console.log("Please select new user name", err);         
                return done(err);
            }

            if (user) {
                return done(null, false, console.log('username already exsists'));
            } else {

                // Create sign up

                console.log('loading here 8')

                var newUser  = new User();

                // Ne user info

                newUser.username = username;
                newUser.password = generateHash(password);
            
                // Save new user

                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });    

        });

    }));



};
