import { test } from 'qunit';
import moduleForAcceptance from 'passport-bluemix-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
