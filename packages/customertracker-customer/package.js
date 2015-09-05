Package.describe({
  name: 'customertracker:customer',
  summary: 'Contains collections and schemas for core customer functionality',
  version: '0.0.1',
  git: 'https://github.com/riebeekn/package-based-architecture'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");
  
  var packages = [
    'customertracker:core@0.0.1',
  ];

  api.use(packages);
  
  api.addFiles([
    'lib/collections.js',
    'lib/routes.js',
    'lib/schemas.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/fixtures.js'
  ], 'server');

  api.addFiles([
    'lib/client/templates/customer-index.html'
  ], 'client');

  api.export([
    'Customers'
  ]);
});