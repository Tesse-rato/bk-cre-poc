const Urls = require('./urls');
const Routes = require('./routes.core');
const Controllers = require('../controllers');


Routes.get('/', (req, res) => {
  console.log('get on /');
});

Routes.get('/bruno', (req, res) => {
  console.log('get on /bruno');
});

Routes.get(Urls.onboarding.partner, Controllers.onboarding.partner);

Routes.post(Urls.onboarding.addPartner, Controllers.onboarding.addPartner);


module.exports = Routes;