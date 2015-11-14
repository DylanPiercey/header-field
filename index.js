var hyphenReg  = /-[a-z]/g;
module.exports = field;

/**
 * Converts hyphenated headers like `content-type` into `Content-Type`.
 */ 
function field (str) {
	if (!str) return "";
	var result = String(str);
	result = (
		toUpperCase(str[0]) +
		str
			.slice(1)
			.toLowerCase()
			.replace(hyphenReg, toUpperCase)
	);
	// Special case to fix the broken http spec.
	if (result === "Referrer") result = "Referer";
	return result;
}

field.lowerCase = function fieldLowerCase (str) {
	str = String(str).toLowerCase();
	if (str === "referrer") str = "referer";
	return str;
};

/**
 * Simple utility to uppercase a string.
 */
function toUpperCase (m) { return m.toUpperCase(); }