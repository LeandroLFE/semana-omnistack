// const express = require('express');

// const routes = express.Router();

// routes.post('/users/:id', (request, response) => {
//     // const params = request.query;
//     // const params = request.params;
 
//     const body = request.body;

//     console.log(body);

//     return response.json({
//         nome: "Leandro",
//         sobreNome: "Fé",
//         idade: 30
//     });
// });

// module.exports = routes;

/** 
* Rota / Recurso
*/

/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação do Back-End
 * POST: Criar uma informação no Bak-End
 * PUT: Alterar uma informação no Back-End
 * DELETE: Deletar uma informação no Back-End
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Paâmetros nomeados enviados na rota após o "?" 
  * Serve para Filtros, paginação, entre outros
  * ?parametro=Valor
  * 
  * Route Params: Parâmetros utilizados para nomear Recursos
  * ?parametro/(:valor), ex: ?users/1
  * 
  * Request Body: Corpo da Requisição, utilizado 
  * 
  * Response: Resposta para o usuário
  * 
  */

  /**
   * SQL: MySQL, SQLite, PostGreeSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select(*).where()
 */

const express = require('express');

const OngController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// routes.get('/ngos', async (request, response) => {
//     const ngos = await connection('ngos').select('*');
    
//     return response.json(ngos);
// });


routes.post('/sessions', SessionController.create);


routes.get('/ngos', OngController.index);
routes.post('/ngos', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;