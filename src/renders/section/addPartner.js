const Input = require("../components/input");
const Section = require("../components/section");

module.exports = Section({
  ableToContinue: false,
  title: '1 - Sócio',
  backgroundColor: 'gray',
  type: 'partner',
  childrens: [
    [Input({ placeholder: 'CPF', validate: true, type: 'cpf' }), Input({ placeholder: 'Nome Completo', validate: true, type: 'text' })],
    [Input({ placeholder: 'Telefone Celular', validate: true, type: 'cel' }), Input({ placeholder: 'E-mail', validate: true, type: 'e-mail' }), Input({ placeholder: 'Porcentual Desconto', validate: true, type: 'percent' })]
  ]
})