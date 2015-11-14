var assert = require("assert");
var field   = require("../");

describe("header-field", function () {
	it("should work", function () {
		assert.equal(field("content-type"), "Content-Type");
		assert.equal(field("content-Length"), "Content-Length");
		assert.equal(field("Content-Disposition"), "Content-Disposition");
		assert.equal(field("Content-DisPosition"), "Content-Disposition");
		assert.equal(field("referrer"), "Referer");
	});
});