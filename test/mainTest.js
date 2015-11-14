var assert = require("assert");
var field   = require("../");

describe("header-field", function () {
	it("should work", function () {
		assert.equal(field("content-type"), "content-type");
		assert.equal(field("content-Length"), "content-length");
		assert.equal(field("Content-Disposition"), "content-disposition");
		assert.equal(field("Content-DisPosition"), "content-disposition");
		assert.equal(field("referrer"), "referer");
		assert.equal(field("Referrer"), "referer");
		assert.throws(function () { field({}); })
	});
});