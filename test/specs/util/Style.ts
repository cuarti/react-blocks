
import {Style} from '../../../src';


test('Style.classNames', () => {

	expect(Style.classNames('foo', 'bar')).toEqual('foo bar');
	expect(Style.classNames('foo bar', 'baz')).toEqual('foo bar baz');
	expect(Style.classNames({foo: true, bar: false, baz: true})).toEqual('foo baz');
	expect(Style.classNames('foo', 'bar', {baz: true, foobar: false})).toEqual('foo bar baz');

});

test('Style.merge', () => {

	expect(Style.merge({width: 100}, {height: 50})).toEqual({width: 100, height: 50});
	expect(Style.merge({color: 'red'}, {color: 'blue'})).toEqual({color: 'blue'});

});
