
module.exports = response => ({
  500(err) {
    response.statusCode = 500;
    response.write(JSON.stringify(err));
    response.end();
  },
  400(err) {
    response.statusCode = 400;
    response.write(JSON.stringify(err));
    response.end();
  },
  200(data) {
    response.statusCode = 200;
    response.write(JSON.stringify(data));
    response.end();
  }
})