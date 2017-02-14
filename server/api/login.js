'use strict';

var router = require('express').Router();
const User = require('./users/user.model');


router.post('/', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    where: { email, password }
  })
  .then((foundUser) => {
    if (foundUser) {
      req.session.userId = foundUser.id;
      res.sendStatus(204);
    }
    else {
      res.sendStatus(401);
    }
  })
  .catch(next);

});

module.exports = router;
