const { AddPartnerSection } = require('../../../renders/section');

module.exports = function (body) {
  const
    header = body.sections.filter(section => section.type === 'header'),
    partner = body.sections.filter(section => section.type === 'partner'),
    footer = body.sections.filter(section => section.type === 'footer');

  return {
    ...body,
    sections: [
      ...header,
      ...partner,
      AddPartnerSection(`${partner.length + 1} - Sócio`),
      ...footer
    ]
  }
}