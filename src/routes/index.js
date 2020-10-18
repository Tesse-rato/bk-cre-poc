const Urls = require('./urls');
const Routes = require('./routes.core');
const Controllers = require('../controllers');

Routes.get(Urls.onboarding.partner, Controllers.onboarding.partner);
Routes.post(Urls.onboarding.partnerFrameAsnwer, Controllers.onboarding.partnerFrameAsnwer);
Routes.post(Urls.onboarding.addPartner, Controllers.onboarding.addPartner);

module.exports = Routes;