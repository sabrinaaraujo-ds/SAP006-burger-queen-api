const { Router } = require('express');
const { getUsers } = require('../controller/usersController');

const router = Router();

router.route('/')
  .get(getUsers);

module.exports = router;
