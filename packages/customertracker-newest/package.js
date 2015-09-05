Package.describe({
  name: 'customertracker:newest',
  summary: 'Customer tracker newest customer functionality',
  version: '0.0.1',
  git: 'https://github.com/riebeekn/package-based-architecture'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use(['customertracker:core@0.0.1']);

  api.addFiles([
    'lib/client/templates/newest-customer.html',
    'lib/client/templates/newest-customer.js'
  ], 'client');

  api.addFiles([
    'lib/server/publications.js'
  ], 'server');
});