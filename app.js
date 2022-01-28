const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sequelize } = require("./db/models");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const apiRouter = require("./routes/api");
const { sessionSecret } = require("./config");
const { restoreUser } = require("./auth");
const animeRouter = require("./routes/anime"); 
const animeListRouter = require("./routes/animeList");
const profileRouter = require("./routes/profile");
const settingsRouter = require("./routes/settings");
const app = express();
const animeGenre = require("./routes/genre");
const http = require('http')

// increase pool size
http.globalAgent.maxSockets = 100;

// view engine setup
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, "public")));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    name: "anime_app_sid",
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

// create Session table if it doesn't already exist
store.sync();

app.use(restoreUser);
app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/users", usersRouter);
app.use("/anime", animeRouter); // added anime router
app.use("/list", animeListRouter);
app.use("/profile", profileRouter);
app.use("/anime/genre", animeGenre);
app.use("/settings", settingsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  return err.status === 404
    ? res.render("404", { title: "404 Page" })
    : res.render("error");
  // res.status(err.status || 500);
  // res.render("error");
});

module.exports = app;
