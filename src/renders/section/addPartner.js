const {
  Input,
  Section
} = require("../components");

module.exports = title => Section({
  ableToContinue: false,
  title: title || ' - Sócio',
  backgroundColor: 'gray',
  type: 'partner',
  childrens: [
    [
      Input({ isValid: true, validate: true, type: 'cpf', placeholder: 'CPF', }),
      Input({ isValid: true, validate: true, type: 'text', placeholder: 'Nome Completo', })
    ],
    [
      Input({ isValid: true, validate: true, type: 'cel', placeholder: 'Telefone Celular', }),
      Input({ isValid: true, validate: true, type: 'e-mail', placeholder: 'E-mail', }),
      Input({ isValid: true, validate: true, type: 'percent', placeholder: 'Porcentual Desconto', })]
  ]
})