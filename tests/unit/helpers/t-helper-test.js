import { generateKeys } from 'ember-i18n-errors/helpers/t-error';
import { module, test } from 'qunit';

module('Unit | Helper | t error');

// Replace this with your real tests.
test('it generates the proper keys', function(assert) {
  var keys = generateKeys('parent.child.grandchild', { attribute: 'name', message: 'blank' });
  assert.equal(keys.length, 8, 'There is 8 keys');
  assert.equal(keys[0], 'parent.child.grandchild.errors.name.blank');
  assert.equal(keys[1], 'parent.child.grandchild.errors.blank');
  assert.equal(keys[2], 'parent.child.errors.name.blank');
  assert.equal(keys[3], 'parent.child.errors.blank');
  assert.equal(keys[4], 'parent.errors.name.blank');
  assert.equal(keys[5], 'parent.errors.blank');
  assert.equal(keys[6], 'errors.name.blank');
  assert.equal(keys[7], 'errors.blank');
});
