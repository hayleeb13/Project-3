const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) { 
    next();
  }
  res.redirect('/');
}

router.use("/api", apiRoutes);
console.log('loading here 4')

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

router.use('/user', isAuthenticated, function(req, res){
   res.send({ user: req.user });
});


console.log('loading here 5')
module.exports = router;