const PureComponent = require('./pureComponent');

module.exports = ({
  placeholder,
  value,
  type,
  width,
  validate,
  isValid
}) => PureComponent({
  placeholder,
  value,
  type,
  width,
  validate,
  isValid,
  id: 'input'
});