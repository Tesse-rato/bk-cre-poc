const { CreateResponses } = require('../utils');

const Methods = {
  GET: require('../routes').routes.get,
  PUT: require('../routes').routes.put,
  POST: require('../routes').routes.post
}

const Routes = (request, response) => {
  const { method, headers, url } = request;
  const Response = CreateResponses(response);
  const equalPath = ({ path }) => path === url;
  let data = '';

  request
    .on('error', err => Response[400](err))   // Erro na transferencia de dados
    .on('data', piece => data += piece)         // Concatenando buffer de dados tcp
    .on('end', () => {
      try {
        Methods[method]
          .find(equalPath)
          .cb({ ...headers, path: url }, JSON.parse(data)) // Chamando metodo passando (header, data)
          .then(Response[200])
          .catch((err, statusCode = '') => {
            Response[statusCode || 500](JSON.stringify(err));
          });
      }
      catch (err) { Response[500]({ err, message: '::Several internal error::' }) }
    });
};

module.exports = Routes;