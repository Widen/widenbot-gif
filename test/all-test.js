var test = require('tape');

var gif = require('../index');

test('sanity check', function(t){
    t.plan(1);
    t.ok(gif);
});
