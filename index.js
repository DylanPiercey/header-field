module.exports = field;

/**
 * Converts hyphenated headers like `Content-Type` into `content-type`.
 */ 
function field (str) {
	if (typeof str !== "string") throw new TypeError("Header Fields must be strings.");
	str = str.toLowerCase();
	if (str === "referrer") str = "referer";
	return str;
};