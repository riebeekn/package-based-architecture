Package.describe({
  name: 'customertracker:list',
  summary: 'Customer tracker list functionality.',
  version: '0.0.1',
  git: 'https://github.com/riebeekn/package-based-architecture'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use(['customertracker:core@0.0.1']);

  api.addFiles([
    'lib/customer-sort-settings.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/stylesheets/styles.css',
    'lib/client/templates/list-customers.html',
    'lib/client/templates/list-customers.js'
  ], 'client');

  api.addFiles([
    'lib/server/publications.js'
  ], 'server');
});