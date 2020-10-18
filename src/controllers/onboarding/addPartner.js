const DB = require('../../db');
const { PartnersScene } = require('../../renders');
const { AddPartner } = require('../../utils');


module.exports = function addPartner(headers, body) {
  return new Promise((resolve, reject) => {
    try {

      resolve(AddPartner(body));

    } catch (err) {
      console.error(err)
      reject(err, 500);
    }
  });
}

