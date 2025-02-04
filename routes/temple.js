const routes = require('express').Router();
const temples = require('../controllers/temple.js');

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of temples
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */

routes.get('/', temples.findAll);
routes.get('/:temple_id', temples.findOne);

routes.post('/', temples.create);

module.exports = routes;
