'use strict';

var QUnit = require('steal-qunit');

var dev = require('./dev');

QUnit.module("can-log/dev");

QUnit.test("stringify", function() {
	strictEqual(dev.stringify(undefined), "undefined");

	ok(/\"foo\": undefined/.test(dev.stringify({ foo: undefined })));

	ok(/\"bar\": undefined/.test(dev.stringify({ foo: undefined,
		bar: undefined })));

	ok(/\"7\": undefined/.test(dev.stringify({ foo: undefined,
		7: undefined, bar: undefined })));
});
