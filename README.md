[![npm version](https://badge.fury.io/js/fast-levenshtein-string.svg)](https://badge.fury.io/js/fast-levenshtein-string)
[![Build Status](https://travis-ci.org/EDumdum/levenshtein-js.svg?branch=master)](https://travis-ci.org/EDumdum/levenshtein-js)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Edumdum/levenshtein-js/master/LICENSE)

# levenshtein-js

Implementation of the [Levenshtein](https://en.wikipedia.org/wiki/Levenshtein_distance) algorithm used to calculate distince between strings.

## Installation

Install using [npm](http://npmjs.org/):

```bash
$ npm install --save fast-levenshtein-string
```

## Usage

```js
var levenshtein = require('fast-levenshtein-string');

levenshtein.compute('niche', 'chiens'); // 5
```

## API

### `compute(rawWord1: String, rawWord2: String)` -> `Number`

Check requirements.  
Returns Levensthein distance between rawWord1 and rawWord2.

*Required*
- rawWord1 must be not `Null`
- rawWord1 must be of type `String`
- rawWord2 must be not `Null`
- rawWord2 must be of type `String`

### `computeWithtoutCheck(rawWord1: String, rawWord2: String)` -> `Number`

Does **NOT** check requirements.  
Returns Levensthein distance between rawWord1 and rawWord2.

*Required*
- rawWord1 must be not `Null`
- rawWord1 must be of type `String`
- rawWord2 must be not `Null`
- rawWord2 must be of type `String` 