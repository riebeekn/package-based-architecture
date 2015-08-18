Package.describe({
  name: 'customertracker:lib', 
  summary: 'Customer tracker third party libraries and global namespace.',
  version: '0.0.1',
  git: 'https://github.com/riebeekn/package-based-architecture'
});

Package.onUse(function (api) {

  // specifies the version of Meteor required
  // here we're requring version 1.0  or greater of meteor
  api.versionsFrom(['METEOR@1.0']); 
  
  // 3rd party packages to use
  var packages = [
    'meteor-platform',
    'iron:router@1.0.9',
    'twbs:bootstrap@3.3.5',
    'sacha:spin@2.3.1',
    'tmeasday:publish-counts@0.6.0',
    'percolate:find-from-publication@0.1.0',
    'aldeed:collection2@2.3.3',
    'natestrauser:font-awesome@4.3.0',
    'iron:router@1.0.9'
  ];

  api.use(packages);

  // means packages that use this package can use the
  // packages.
  api.imply(packages);

  api.addFiles([
    'lib/core.js',
  ], ['client', 'server']);

  // things we want visible outside of the package
  api.export([
    'CustomerTracker'
  ]);
});
