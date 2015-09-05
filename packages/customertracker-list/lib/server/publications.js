FindFromPublication.publish('customers', function(skipCount, sortField, sortDirection) {
  // parameter validations
  check(skipCount, CustomerTracker.checks.positiveIntegerCheck);
  check(sortField, CustomerTracker.checks.sortFieldCheck);
  check(sortDirection, CustomerTracker.checks.sortDirectionCheck)

  Counts.publish(this, 'customerCount', Customers.find(), { 
    noReady: true
  });
  
  return Customers.find({}, {
    limit: parseInt(Meteor.settings.public.recordsPerPage),
    skip: skipCount,
    sort: CustomerSortSettings.getSortParams(sortField, sortDirection)
  });
});

// GET RID OF THIS, MOVING IT INTO THE PACKAGE
// FindFromPublication.publish('newestCustomer', function() {
//   return Customers.find({}, {
//     limit: 1,
//     sort: {'acquired': -1}
//   });
// });