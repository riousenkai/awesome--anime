const csrf = require("csurf");

// CSRF Protection
const csrfProtection = csrf({ cookie: true });

// Async Handler Function
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

module.exports = {
  asyncHandler,
  csrfProtection,
};
