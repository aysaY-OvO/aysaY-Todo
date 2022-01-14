const Router = require('../Router');
const controller = require('./todos-controller');

const router = new Router();

router.get('/todos', controller.getTodos);
router.post('/todos', controller.createTodos);

module.exports = router;
