var hyphenReg  = /-[a-z]/g;
module.exports = field;

/**
 * Converts hyphenated headers like `content-type` into `Content-Type`.
 */ 
function field (str) {
	if (!str) return "";
	str = String(str);
	return (
		toUpperCase(str[0]) +
		str.slice(1).replace(hyphenReg, toUpperCase)
	);
}

/**
 * Simple utility to uppercase a string.
 */
function toUpperCase (m) { return m.toUpperCase(); }