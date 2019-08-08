const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('passport');
const morgan = require('morgan');     //morgan = logger

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'thesecret',
  saveUninitialized: true,
  resave: true
}))
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport.js')(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project-3",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});