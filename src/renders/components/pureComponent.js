const DEFAULT_VALUE = {
  type: null,
  title: null,
  value: null,
  action: null,
  options: null,
  subTitle: null,
  childrens: null,
  titleColor: null,
  placeholder: null,
  backgroundColor: null,
  ableToContinue: null,
  sections: null,
  section: null,
  onClick: null,
  onAccept: null,
  onCancel: null,
  label: null,
  width: null,
  validate: null,
  id: null,
}

module.exports = function PureComponent(arg = DEFAULT_VALUE) {
  this.type = arg.type;
  this.title = arg.title;
  this.value = arg.value;
  this.action = arg.action;
  this.options = arg.options;
  this.subTitle = arg.subTitle;
  this.childrens = arg.childrens;
  this.titleColor = arg.titleColor;
  this.placeholder = arg.placeholder;
  this.backgroundColor = arg.backgroundColor;
  this.ableToContinue = arg.ableToContinue;
  this.sections = arg.sections;
  this.section = arg.section;
  this.onClick = arg.onClick;
  this.onAccept = arg.onAccept;
  this.onCancel = arg.onCancel;
  this.label = arg.label;
  this.width = arg.width;
  this.validate = arg.validate;
  this.id = arg.id;

  return {
    render() {
      for (let i in this) { if (!this[i]) delete this[i]; }
      return this;
    }
  }
}

