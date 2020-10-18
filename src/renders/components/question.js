const PureComponent = require('./pureComponent');

module.exports = ({
  label,
  onAccept,
  onCancel,
  value
}) => PureComponent({
  label,
  onAccept,
  onCancel,
  value,
  id: 'question',
});