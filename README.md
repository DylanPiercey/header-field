<h1 align="center">
  <!-- Logo -->
  <br/>
  Header-Field
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg" alt="API Stability"/>
  </a>
  <!-- TypeScript -->
  <a href="http://typescriptlang.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E-typescript-blue.svg" alt="TypeScript"/>
  </a>
  <!-- Prettier -->
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with prettier"/>
  </a>
  <!-- Travis build -->
  <a href="https://travis-ci.org/DylanPiercey/header-field">
  <img src="https://img.shields.io/travis/DylanPiercey/header-field.svg" alt="Build status"/>
  </a>
  <!-- Coveralls coverage -->
  <a href="https://coveralls.io/github/DylanPiercey/header-field">
    <img src="https://img.shields.io/coveralls/DylanPiercey/header-field.svg" alt="Test Coverage"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/header-field">
    <img src="https://img.shields.io/npm/v/header-field.svg" alt="NPM Version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/header-field">
    <img src="https://img.shields.io/npm/dm/header-field.svg" alt="Downloads"/>
  </a>
  <!-- Size -->
  <a href="https://npmjs.org/package/header-field">
    <img src="https://img.shields.io/badge/size-418-green.svg" alt="Browser Bundle Size"/>
  </a>
</h1>

Transform header fields into a properly formatted string, with lowercase characters and hyphens.

# Installation

#### Npm
```console
npm install header-field
```

# Example

```javascript
import { normalize } from "header-field";

normalize("content-type"); //-> "content-type"
normalize("content-Length"); //-> "content-length"
normalize("Content-Disposition"); //-> "content-disposition"

// Special case: referrer -> referer.
normalize("Referrer"); //-> "referer"
```

### Contributions

* Use `npm test` to build and run tests.

Please feel free to create a PR!
