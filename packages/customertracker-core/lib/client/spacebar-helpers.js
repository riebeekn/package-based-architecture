Template.registerHelper('render', function () {
  return Template[this.name] ? Template[this.name] : null;
});