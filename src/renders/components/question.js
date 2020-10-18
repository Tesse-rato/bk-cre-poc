const PureComponent = require('./pureComponent');

module.exports = ({
  label,
  onAccept,
  onCancel
}) => PureComponent({
  label,
  onAccept,
  onCancel,
  id: 'question',
}).render();