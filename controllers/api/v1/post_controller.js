const post_controller = require('express').Router();
const verify          = require('../../../middleware/token_verification');

post_controller.get('/', verify, (req, res) => {
  res.json({
    posts: {
      title: 'My First Post',
      description: 'random data you should not access without login'
    }
  });
});

module.exports = post_controller;