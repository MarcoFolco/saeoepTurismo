var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
require('dotenv').config()

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/admin/login');
var travelsRouter = require('./routes/admin/travels');
var discountsRouter = require('./routes/admin/discounts');
var pagesRouter = require('./routes/admin/pages');
var enterprisesRouter = require('./routes/admin/enterprises');
const { handlebars } = require('hbs');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'qX7W59Nc&fz#',
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  // app.locals.isCurrentUrl = (tabName) => {
  //   return req.url.split('/').includes(tabName);
  // }
  app.locals.currentUrl = req.url;
  app.locals.user = req.session.username;
  next();
});

handlebars.registerHelper("isActiveUrl", (tabName) => {
  return app.locals.currentUrl.split('/').includes(tabName) ? 'active' : '';
})

secured = async (req, res, next) => {
  try {
    if (req.session.user_id) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

app.use('/', indexRouter);

// Admin
app.use('/admin/login', loginRouter);

app.use('/admin/travels', secured, travelsRouter);

app.use('/admin/discounts', secured, discountsRouter);

app.use('/admin/pages', secured, pagesRouter);

app.use('/admin/enterprises', secured, enterprisesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
