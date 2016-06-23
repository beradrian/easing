![Bower](https://img.shields.io/bower/v/easingjs.svg) [![NPM](https://img.shields.io/npm/v/easingjs.svg)](https://www.npmjs.com/package/easingjs) ![License](https://img.shields.io/npm/l/easingjs.svg)
[![Build Status](https://travis-ci.org/beradrian/easingjs.png)](https://travis-ci.org/beradrian/easingjs)

[![NPM](https://nodei.co/npm/easingjs.png)](https://nodei.co/npm/easingjs/)

# Easing functions for JavaScript


## Installation
Using 
- *npm*: `npm install feasing`. See below an example using `require`.
- directly: download the archive from releases and include `src/main/js/feasing.js`

This can be used either from a browser or on the server side.

## API

Easing

- constructor `new Easing(startValue, endValue, startTime, endTime, easingFunction)`
 - `startValue` the value associated with `startTime`
 - `endValue` the value associated with `endTime`
 - `startTime` the value of the first moment in change. It could be seconds, milliseconds, whatever, but you must keep it consistent.
 - `endTime` the value of the first moment in change.
 - `easingFunction` must be one of Easing.linear, Easing.linearTween, Easing.easeInQuad, Easing.easeOutQuad, Easing.easeInOutQuad, Easing.easeInCubic, Easing.easeOutCubic, Easing.easeInOutCubic, Easing.easeInQuart, Easing.easeOutQuart, Easing.easeInOutQuart, Easing.easeInQuint, Easing.easeOutQuint, Easing.easeInOutQuint, Easing.easeInSine, Easing.easeOutSine, Easing.easeInOutSine, Easing.easeInExpo, Easing.easeOutExpo, Easing.easeInOutExpo, Easing.easeInCirc, Easing.easeOutCirc, Easing.easeInOutCirc
- `.getValue(time)`
 - returns the corresponding value for the given time. Time must be between `startTime` and `endTime`. 

## Example

	var Easing = require("feasing");
	// First create the easing function
	var easing = new Easing(0, 100, 0, 1000, Easing.linear);
	// get the value for the mid-time
	var midValue = easing.getValue(500);

## Testing
The testing is done using Jasmine. To run the tests just run `npm test` or `jasmine`.

## How to make a new release
1. Change the version number in `bower.json` and `package.json` (if not already changed - check the version number against the latest release in Github)
2. Create a new [release](https://github.com/beradrian/feasing/releases) in github with the same name for tag and title as the version number (e.g. `1.0.0`). Do not forget to include the changelog in the release description.
3. Run `npm publish` to publish the new version to npm

## License
MIT 
