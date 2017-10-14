import * as assert from "assert";
import { normalize } from "../src";

describe("header-field", () => {
  it("should normalize headers", () => {
    assert.equal(normalize("content-type"), "content-type");
    assert.equal(normalize("content-Length"), "content-length");
    assert.equal(normalize("Content-Disposition"), "content-disposition");
    assert.equal(normalize("Content-DisPosition"), "content-disposition");
    assert.equal(normalize("referrer"), "referer");
    assert.equal(normalize("Referrer"), "referer");
    assert.throws(() => normalize({} as string));
  });
});
