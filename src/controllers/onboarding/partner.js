const DB = require('../../db');
const { PartnersScene } = require('../../renders');


module.exports = function partner(headers, body) {
  return new Promise((resolve, reject) => {
    try {
      console.clear();

      resolve(PartnersScene);

    } catch (err) {
      console.error(err)
      reject(err, 500);
    }
  });
}