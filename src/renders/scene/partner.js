const { onboarding: { partnerFrameAsnwer } } = require('../../routes/urls');
const {
  Scene,
  Section,
  Question,
  Button
} = require('../components');
const {
  AddPartnerSection,
} = require('../section');

module.exports = Scene({
  ableToContinue: false,
  section: 0,
  sections: [
    Section({
      ableToContinue: true,
      title: 'Quadros de Sócios',
      subTitle: 'Identifique aqui todos os sócios presentes no contrato social',
      type: 'header',
      childrens: [Question({ label: 'Você faz parte do quadro societário?', onAccept: partnerFrameAsnwer, onCancel: partnerFrameAsnwer, value: false })],
    }),
    AddPartnerSection('1 - Sócio'),
    Section({
      ableToContinue: false,
      type: 'footer',
      childrens: [
        Button({ label: 'Adicionar um novo sócio', onClick: '/onboarding/partner', type: 'newPartner' }),
      ]
    })
  ]
});