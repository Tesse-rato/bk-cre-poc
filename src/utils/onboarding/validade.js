module.exports = function (body, section) {
  if (!body) return false;

  const partners = body.sections.filter(sc => sc.type === section);

  return partners.map(partner => {
    return partner.childrens.map(child => {
      if (Array.isArray(child)) {
        let valid = true;
        child.map(column => {
          if (!applyValue(column)) valid = false;
        })
        return valid;
      }
      else {
        return applyValue(child);
      }

      function applyValue(child) {
        const valid = validateValue(child);
        if (!valid) child.isValid = false;
        else child.isValid = true;
        return valid;
      }
      function validateValue({ value, validate, type }) {
        if (!value && validate) return false;
        else if (value && validate) return validateFormat(value, type);
        else return true;
      }
      function validateFormat(value, type) {
        if (type === 'cpf') { return /\d{11}/.test(value); }
        else if (value) return true;
        else return false;
      }
    });
  }).reduce((acm, crr) => [...acm, ...crr]).find(v => !v) === false ? false : true;
}