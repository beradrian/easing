var Easing = function(startValue, endValue, startTime, endTime, easingFunction) {
	switch (arguments.length) {
		case 1:
			startValue = 0;
			endValue = 100;
			startTime = 0;
			endTime = arguments[0];
			easingFunction = Easing.linearTween;
			break;
		case 3:
			startValue = arguments[0];
			endValue = arguments[1];
			startTime = 0;
			endTime = arguments[2];
			easingFunction = Easing.linearTween;
			break;
	}

	this.startValue = startValue;
	this.endValue = endValue;
	this.startTime = startTime;
	this.endTime = endTime;
	this.easingFunction = easingFunction;
};

module.exports = Easing;

Easing.prototype.getValue = function(currentTime) {
	return this.easingFunction(currentTime, this.startValue, this.endValue - this.startValue, this.endTime - this.startTime);
}

// From http://gizma.com/easing/
// t - currentTime, b - startValue, c - change in value, d - duration
// simple linear tweening - no easing, no acceleration
Easing.linear = Easing.linearTween = function (t, b, c, d) {
	return c*t/d + b;
};
// quadratic easing in - accelerating from zero velocity
Easing.easeInQuad = function (t, b, c, d) {
	t /= d;
	return c*t*t + b;
};
// quadratic easing out - decelerating to zero velocity
Easing.easeOutQuad = function (t, b, c, d) {
	t /= d;
	return -c * t*(t-2) + b;
};

// quadratic easing in/out - acceleration until halfway, then deceleration
Easing.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

// cubic easing in - accelerating from zero velocity
Easing.easeInCubic = function (t, b, c, d) {
	t /= d;
	return c*t*t*t + b;
};

// cubic easing out - decelerating to zero velocity
Easing.easeOutCubic = function (t, b, c, d) {
	t /= d;
	t--;
	return c*(t*t*t + 1) + b;
};

// cubic easing in/out - acceleration until halfway, then deceleration
Easing.easeInOutCubic = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

// quartic easing in - accelerating from zero velocity
Easing.easeInQuart = function (t, b, c, d) {
	t /= d;
	return c*t*t*t*t + b;
};

// quartic easing out - decelerating to zero velocity
Easing.easeOutQuart = function (t, b, c, d) {
	t /= d;
	t--;
	return -c * (t*t*t*t - 1) + b;
};

// quartic easing in/out - acceleration until halfway, then deceleration
Easing.easeInOutQuart = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t*t + b;
	t -= 2;
	return -c/2 * (t*t*t*t - 2) + b;
};

// quintic easing in - accelerating from zero velocity
Easing.easeInQuint = function (t, b, c, d) {
	t /= d;
	return c*t*t*t*t*t + b;
};

// quintic easing out - decelerating to zero velocity
Easing.easeOutQuint = function (t, b, c, d) {
	t /= d;
	t--;
	return c*(t*t*t*t*t + 1) + b;
};

// quintic easing in/out - acceleration until halfway, then deceleration
Easing.easeInOutQuint = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t*t*t + 2) + b;
};
// sinusoidal easing in - accelerating from zero velocity
Easing.easeInSine = function (t, b, c, d) {
	return -c * Easing.cos(t/d * (Easing.PI/2)) + c + b;
};

// sinusoidal easing out - decelerating to zero velocity
Easing.easeOutSine = function (t, b, c, d) {
	return c * Easing.sin(t/d * (Easing.PI/2)) + b;
};

// sinusoidal easing in/out - accelerating until halfway, then decelerating
Easing.easeInOutSine = function (t, b, c, d) {
	return -c/2 * (Easing.cos(Easing.PI*t/d) - 1) + b;
};

// exponential easing in - accelerating from zero velocity
Easing.easeInExpo = function (t, b, c, d) {
	return c * Easing.pow( 2, 10 * (t/d - 1) ) + b;
};

// exponential easing out - decelerating to zero velocity
Easing.easeOutExpo = function (t, b, c, d) {
	return c * ( -Easing.pow( 2, -10 * t/d ) + 1 ) + b;
};

// exponential easing in/out - accelerating until halfway, then decelerating
Easing.easeInOutExpo = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2 * Easing.pow( 2, 10 * (t - 1) ) + b;
	t--;
	return c/2 * ( -Easing.pow( 2, -10 * t) + 2 ) + b;
};
// circular easing in - accelerating from zero velocity
Easing.easeInCirc = function (t, b, c, d) {
	t /= d;
	return -c * (Easing.sqrt(1 - t*t) - 1) + b;
};

// circular easing out - decelerating to zero velocity
Easing.easeOutCirc = function (t, b, c, d) {
	t /= d;
	t--;
	return c * Easing.sqrt(1 - t*t) + b;
};

// circular easing in/out - acceleration until halfway, then deceleration
Easing.easeInOutCirc = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return -c/2 * (Easing.sqrt(1 - t*t) - 1) + b;
	t -= 2;
	return c/2 * (Easing.sqrt(1 - t*t) + 1) + b;
};

