//https://github.com/substack/tape
var test = require('tape');

test('dummy failed',{skip:true},function(t){
	t.fail('dummy test failed');
	t.end();
});
test('dummy',{},function(t){
	t.pass('dummy test passed');
	t.end();
});
test('dummy2',{},function(t){
	t.ok(true  , 'dummy2 test passed');
	
	t.test('dummy2 sub',{},function(p){
		p.pass('dummy2 sub test passed');
		p.end();
	});
	
	t.end();
});
