const test = require('tape')
const chooPersist = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(chooPersist)
})
