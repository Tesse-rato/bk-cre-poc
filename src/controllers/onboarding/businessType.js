const DB = require('../../db');


module.exports = function businessType(headers, body) {
  return new Promise((resolve, reject) => {
    try {

      console.log(headers, DB.get('onboarding'));

      resolve();
    } catch (err) {
      console.error(err)
      reject(err, 500);
    }
  });
}