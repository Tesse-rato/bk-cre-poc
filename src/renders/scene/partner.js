const {
  Scene,
  Section,
  Question,
  Input,
  Button
} = require('../components');

module.exports = Scene({
  ableToContinue: false,
  section: 0,
  sections: [
    Section({
      ableToContinue: false,
      title: 'Quadros de Sócios',
      subTitle: 'Identifique aqui todos os sócios presentes no contrato social',
      childrens: [Question({ label: 'Você faz parte do quadro societário?', onAccept: 'url', onCancel: 'url' })]
    }),
    Section({
      ableToContinue: false,
      title: '1 - Sócio',
      backgroundColor: 'gray',
      childrens: [
        [Input({ placeholder: 'CPF', validate: true, type: 'cpf' }), Input({ placeholder: 'Nome Completo', validate: true, type: 'text' })],
        [Input({ placeholder: 'Telefone Celular', validate: true, type: 'cel' }), Input({ placeholder: 'E-mail', validate: true, type: 'e-mail' }), Input({ placeholder: 'Porcentual Desconto', validate: true, type: 'percent' })]
      ]
    }),
    Section({
      ableToContinue: false,
      title: '1 - Sócio',
      backgroundColor: 'gray',
      childrens: [
        Button({ label: 'Adicionar um novo sócio', onClick: 'url', type: 'newPartner' }),
      ]
    })
  ]
});