# Header-Field
Transform header fields into a properly formatted string, with lowercase characters and hyphens.

# Installation

#### Npm
```console
npm install header-field
```

# Example

```javascript
var field = require('header-field');

field("content-type"); //-> "content-type"
field("content-Length"); //-> "content-length"
field("Content-Disposition"); //-> "content-disposition"

// Special case: referrer -> referer.
field("Referrer"); //-> "referer"
```

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
