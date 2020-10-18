
module.exports = {
  fields: new Object(),
  get(field) { return this.fields[field] },
  set(field, value) { this.fields[field] = value; return this },
}