# Header-Field
Transform header fields into a properly formatted string, with uppercase characters and hyphens.

# Installation

#### Npm
```console
npm install header-field
```

# Example

```javascript
var field = require('header-field');

field("content-type"); //-> "Content-Type"
field("content-Length"); //-> "Content-Length"
field("Content-Disposition"); //-> "Content-Disposition"

// Special case: referrer -> referer.
field("referrer"); //-> "Referer"

// For lowercased headers.
field.lowerCase("Referrer"); //-> "referer"
```

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
