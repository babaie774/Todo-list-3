const express = require('express');
const { getTodos } = require('../controllers/todo');

const router = express.Router({
  mergeParams: true,
});

const advancedResult = require('../middleware/advancedResult');
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResult(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getCourse,
  )
  .post(protect, authorize('publisher', 'admin'));

module.exports = router;
