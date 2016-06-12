![Bower](https://img.shields.io/bower/v/easingjs.svg) [![NPM](https://img.shields.io/npm/v/easingjs.svg)](https://www.npmjs.com/package/easingjs) ![License](https://img.shields.io/npm/l/easingjs.svg)
[![Build Status](https://travis-ci.org/beradrian/easingjs.png)](https://travis-ci.org/beradrian/easingjs)

[![NPM](https://nodei.co/npm/easingjs.png)](https://nodei.co/npm/easingjs/)

# easingjs functions for JavaScript


## Installation
Using 
- *npm*: `npm install easingjs`. See below an example using `require`.
- directly: download the archive from releases and include `easing.js`

This can be used either from a browser or on the server side.

## Usage

	var easingjs = require("easingjs");


## Example

## Testing
The testing is done using Jasmine. To run the tests just run `npm test` or `jasmine`.

## How to make a new release
1. Change the version number in `bower.json` and `package.json` (if not already changed - check the version number against the latest release in Github)
2. Create a new [release](https://github.com/beradrian/easingjs/releases) in github with the same name for tag and title as the version number (e.g. `1.0.0`). Do not forget to include the changelog in the release description.
3. Run `npm publish` to publish the new version to npm

## License
MIT 
