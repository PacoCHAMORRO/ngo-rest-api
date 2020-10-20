const express = require('express');
const { body } = require('express-validator');

const collabsController = require('../controllers/collabs');

const router = express.Router();

// GET /collabs/collaborator
router.get('/collaborators', collabsController.getCollabs);

router.post(
  '/collab',
  [
  body('title')
    .trim()
    .isLength({min: 5}),
  body('content')
    .trim()
    .isLength({ min:5 })
  ],
  collabsController.postCollab
);
module.exports = router;

