Package.describe({
  name: 'customertracker:core',
  summary: 'Customer tracker core libraries.',
  version: '0.0.1',
  git: 'https://github.com/riebeekn/package-based-architecture'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");
  
  var packages = [
    'customertracker:lib@0.0.1',
  ];

  api.use(packages);
  
  api.imply(packages);

  api.addFiles([
    'lib/router/config.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/stylesheets/styles.css',
    'lib/client/templates/layout.html',
    'lib/client/templates/not-found.html',
    'lib/client/spacebar-helpers.js'
  ], 'client');

  api.addFiles([
    'lib/server/custom-checks.js'
  ], 'server');
});