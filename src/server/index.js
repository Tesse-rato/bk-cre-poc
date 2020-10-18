const { CreateResponses } = require('../utils');
const { GET, POST, PUT, DELETE } = require('../routes');
const Methods = { GET, PUT, POST, DELETE };

const Routes = (request, response) => {
  let data = new String();
  const
    { method, headers, url } = request,
    Response = CreateResponses(response),
    equalPath = ({ path }) => path === url;

  request
    .on('error', err => Response[400](err))   // Erro na transferencia de dados
    .on('data', piece => data += piece)  // Concatenando buffer de dados tcp
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
      catch (err) { Response[500]({ err, message: '::Several internal error::' }); console.error(err) }
    });
};

module.exports = Routes;