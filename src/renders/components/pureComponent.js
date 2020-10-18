const DEFAULT_VALUE = {
  type: undefined,
  title: undefined,
  value: undefined,
  action: undefined,
  options: undefined,
  subTitle: undefined,
  childrens: undefined,
  titleColor: undefined,
  placeholder: undefined,
  backgroundColor: undefined,
  ableToContinue: undefined,
  sections: undefined,
  section: undefined,
  onClick: undefined,
  onAccept: undefined,
  onCancel: undefined,
  label: undefined,
  width: undefined,
  validate: undefined,
  id: undefined,
  isValid: undefined,
}

module.exports = function PureComponent(arg = DEFAULT_VALUE) {
  for (let i in arg) { if (arg[i] === undefined) delete arg[i]; }
  return arg;
}

