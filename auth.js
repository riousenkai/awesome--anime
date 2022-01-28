const { User } = require("./db/models");

// Restrict Login/ Register

const noLoginRegister = (req, res, next) => {
  if (res.locals.authenticated) return res.redirect("/");
  return next();
};

// Login User

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };

};

// Logout User

const logoutUser = (req, res) => {
  delete req.session.auth;
};

// Require Authorization

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect("/login");
  }
  return next();
};

// Restore Session

const restoreUser = async (req, res, next) => {

  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const user = await User.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};

module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser,
  noLoginRegister,
};
