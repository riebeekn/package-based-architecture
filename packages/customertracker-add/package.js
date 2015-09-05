Package.describe({
  name: 'customertracker:add',
  summary: 'Contains add customer functionality',
  version: '0.0.1',
  git: 'https://github.com/riebeekn/package-based-architecture'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");

  // note need to include this to get the 3rd party packages from lib
  api.use(['customertracker:core@0.0.1']);

  api.addFiles([
    'lib/methods.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/stylesheets/styles.css',
    'lib/client/templates/add-customer.html',
    'lib/client/templates/add-customer.js',
    'lib/client/templates/add-customer-button.html',
    'lib/client/templates/add-customer-button.js'
  ], 'client');
});