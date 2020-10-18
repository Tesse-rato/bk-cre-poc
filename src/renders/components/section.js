const PureComponent = require("./pureComponent");

module.exports = ({
  childrens,
  ableToContinue,
  title,
  subTitle,
  backgroundColor,
  titleColor,
  type
}) => PureComponent({
  childrens,
  ableToContinue,
  title,
  subTitle,
  backgroundColor,
  titleColor,
  type,
  id: 'section'
});