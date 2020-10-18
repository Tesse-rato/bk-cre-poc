const PureComponent = require('./pureComponent');

module.exports = ({
  placeholder,
  value,
  type,
  width,
  validate,
}) => PureComponent({
  placeholder,
  value,
  type,
  width,
  validate,
  id: 'input'
});