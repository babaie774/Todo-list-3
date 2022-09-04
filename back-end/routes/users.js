const express = require('express');
const {
  getUsers,
} = require('./controllers/users');

const router = express.Router({
  mergeParams: true,
});

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require();

router.use('protect');
router.use(authorize('admin'));

router.route('/').get(advancedResults(User), getUsers);

// router.route('/:id').get(getUser);

module.exports = router;
