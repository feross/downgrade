var test = require('tape')
var downgrade = require('../')

test('basic usage', function (t) {
  var currentUser = process.getuid()
  t.doesNotThrow(function () {
    downgrade('nobody')
  })
  t.ok(process.getuid() !== currentUser)
  t.end()
})
