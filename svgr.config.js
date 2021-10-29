function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports },
) {
  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}
    ${exports}
  `
}

// function template(
//   { template },
//   opts,
//   { imports, componentName, props, jsx, exports },
// ) {
//   const newComponentName = componentName.name.replace('Svg','');

//   return template.ast`
//     ${imports}
//     const ${newComponentName} = (${props}) => ${jsx}
//     const ForwardRef = React.forwardRef(${newComponentName});
//     export default ForwardRef;
//   `
// }

module.exports = {
  icon: true,
  ref: true,
  typescript: true,
  template: template,
  expandProps: 'start',
  svgProps: {
    fontSize: `{size || 32}`,
    fill: `{fill || 'currentColor'}`,
    style: '{style}'
  }
}