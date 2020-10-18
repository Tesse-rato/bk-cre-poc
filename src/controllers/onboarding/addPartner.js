const { AddPartner, validadeSections } = require('../../utils');


module.exports = function addPartner(headers, body) {
  return new Promise((resolve, reject) => {
    try {

      if (validadeSections(body, 'partner')) resolve(AddPartner(body));
      else resolve(body);

    } catch (err) {
      console.error(err)
      reject(err, 500);
    }
  });
}
