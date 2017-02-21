const test = require('tape');

const from = require('array.from');


test('array.from polyfill', (t) => {
	t.plan(1);
	t.strictEqual(from('🖐🏿'), ['🖐', '🏿']);
});
