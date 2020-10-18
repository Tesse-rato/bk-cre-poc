module.exports = function businessType(headers, body) {
  return new Promise((resolve, reject) => {
    try {
      console.log(headers);
      resolve();
    } catch (err) {
      reject(err, 500);
    }
  });
}