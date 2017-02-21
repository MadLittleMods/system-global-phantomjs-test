const test = require('tape');

const global = require('system.global')();


test('global foo bar', (t) => {
	t.plan(1);
	global.foo = 'bar';
	console.log(global.foo);
	t.strictEqual(global.foo, 'bar');
});
