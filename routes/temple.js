const routes = require('express').Router();
const temples = require('../controllers/temple.js');

/**
 * @swagger
 * /temples:
 *   get:
 *     summary: Get a list of temples
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */

routes.get('/', temples.findAll);

//https://swagger.io/docs/specification/v3_0/describing-parameters/

/**
 * @swagger
 * /temples/{temple_id}:
 *   get:
 *     summary: Get a list of temples by the Temple ID
 *     description: Retrieve a list of temples from the database.
 *     parameters:
 *      - in: path
 *        name: temple_id
 *        required: true
 *        schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */

routes.get('/:temple_id', temples.findOne);


routes.post('/', temples.create);

module.exports = routes;
