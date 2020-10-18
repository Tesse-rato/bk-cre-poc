module.exports = {
  GET: new Array(),
  POST: new Array(),
  PUT: new Array(),
  DELETE: new Array(),
  get(path, cb) { this.GET.push({ path, cb }) },
  post(path, cb) { this.POST.push({ path, cb }) },
  put(path, cb) { this.PUT.push({ path, cb }) },
  delete(path, cb) { this.DELETE.push({ path, cb }) }
}