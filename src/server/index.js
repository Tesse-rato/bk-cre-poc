const { CreateResponses } = require('../utils');
const { GET, POST, PUT, DELETE } = require('../routes');
const Methods = { GET, PUT, POST, DELETE };
const DataBase = require('../db');

const Routes = (request, response) => {
  let data = '';
  const
    { method, headers, url } = request,
    Response = CreateResponses(response),
    equalPath = ({ path }) => path === url,
    route = Methods[method].find(equalPath);

  request
    .on('error', err => Response[400](err))   // Erro na transferencia de dados
    .on('data', piece => data += piece)  // Concatenando buffer de dados tcp
    .on('end', () => {
      try {
        if (!route) return Response[404]({ method, url, message: 'Not found' });
        data = JSON.parse(data.toString() || '{}');
        route
          .cb({ ...headers, path: url }, data) // Chamando metodo passando (header, data)
          .then(Response[200])
          .catch((err, statusCode) => {
            Response[statusCode || 400](err);
          });
      }
      catch (err) { Response[500]({ err, message: '::Several internal error::' }); console.error(err) }
    });
};

module.exports = Routes;



DataBase.set('onboarding', [
  // {
  //   scene: 0,
  //   scenes: [
  //     PartnersScene
  //   ]
  // }
])
