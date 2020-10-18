module.exports = new class RoutesCore {
  constructor() {
    this.routes = {
      get: [], post: [], put: [],
    }
  }

  get(path, cb) { this.routes.get.push({ path, cb }) }
  post(path, cb) { this.routes.post.push({ path, cb }) }
  put(path, cb) { this.routes.put.push({ path, cb }) }
}