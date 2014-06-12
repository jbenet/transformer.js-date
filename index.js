var Type = require('transformer-type');

module.exports = new Type({
  // @context and type filled in automatically.
  'id': 'js-date',
  'description': 'General JS Date',
  'schema': "Date"
});
