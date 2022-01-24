// ExpressJS Core
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require("helmet");

require('./modules/auth/config/passport');

// Auth: Passport
// const passport = require('passport');
// require('./modules/auth/configs/passport');

// Init Server
var app = express();

// Register Middlewares
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Register Public Routes
// app.get('/health', require('./modules/common/health-check') );

// app.use('/v1', require('./modules/auth/routes'));
// require('./modules/auth/configs/passport');

app.use('/v1/cars', require('./modules/car/routes'));
app.use('/', require('./modules/auth/routes'));

// Register Protected Routes
// app.all('*', passport.authenticate('jwt', {session: false}), (req, res, next) => next());
// app.all('*', require('./modules/auth/middlewares/token-blacklist-check'), (req, res, next) => next());
// app.use( '/v1/shop',      require('./modules/shop') );

app.use(require('./modules/core/middlewares/not-found-error-handler'));
app.use(require('./modules/core/middlewares/error-handler'));

// Register Event Listeners
// require('./modules/auth/events')(app);
// require('./modules/youtube/events')(app);

// Export for Running Tests
module.exports = app;