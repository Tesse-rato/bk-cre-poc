const Routes = require('./routes.core');
const Controllers = require('../controllers');


Routes.get('/', (req, res) => {
  console.log('get on /');
});

Routes.get('/bruno', (req, res) => {
  console.log('get on /bruno');
});

Routes.get('/businessType', Controllers.onboarding.businessType);


module.exports = Routes;