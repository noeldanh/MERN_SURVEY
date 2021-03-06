const passport = require('passport');
const mongoose = require('mongoose');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', function(req, res) {
    req.logout;
  });

  app.get('/api/current_user', function(req, res) {
    res.send(req.user);
  });
};
