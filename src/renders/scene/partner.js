const { onboarding: { partnerFrameAsnwer } } = require('../../routes/urls');
const {
  Scene,
  Section,
  Question,
  Button
} = require('../components');
const {
  AddPartner,
} = require('../section')

module.exports = Scene({
  ableToContinue: false,
  section: 0,
  sections: [
    Section({
      ableToContinue: false,
      title: 'Quadros de Sócios',
      subTitle: 'Identifique aqui todos os sócios presentes no contrato social',
      type: 'header',
      childrens: [Question({ label: 'Você faz parte do quadro societário?', onAccept: partnerFrameAsnwer, onCancel: partnerFrameAsnwer, value: false })],
    }),
    AddPartner,
    Section({
      ableToContinue: false,
      type: 'footer',
      childrens: [
        Button({ label: 'Adicionar um novo sócio', onClick: 'url', type: 'newPartner' }),
      ]
    })
  ]
});