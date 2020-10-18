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
  return {
    render() {
      for (let i in this) { if (!this[i]) delete this[i]; }
      return this;
    }
  }
}

