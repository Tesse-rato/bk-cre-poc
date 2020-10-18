const Input = require("../components/input");
const Section = require("../components/section");

module.exports = title => Section({
  ableToContinue: false,
  title: title || ' - Sócio',
  backgroundColor: 'gray',
  type: 'partner',
  childrens: [
    [Input({ placeholder: 'CPF', validate: true, type: 'cpf' }), Input({ placeholder: 'Nome Completo', validate: true, type: 'text' })],
    [Input({ placeholder: 'Telefone Celular', validate: true, type: 'cel' }), Input({ placeholder: 'E-mail', validate: true, type: 'e-mail' }), Input({ placeholder: 'Porcentual Desconto', validate: true, type: 'percent' })]
  ]
})