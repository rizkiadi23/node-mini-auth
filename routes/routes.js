const auth_controller = require('../controllers/api/v1/auth_controller');
const post_controller = require('../controllers/api/v1/post_controller');

module.exports = app => {
  app.use('/api/v1/auth', auth_controller);
  app.use('/api/v1/posts', post_controller);
}