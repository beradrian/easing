module.exports = function(config) {
	var deps = "@(jscommon)";
	var cfg = {
		basePath: '../..'
		, logLevel: 'DEBUG'
		, frameworks: ["jasmine", "commonjs"]
		, files: ["src/test/spec/*Spec.js", {pattern: "src/main/js/easing.js", included: true}, 
				{pattern: "node_modules/" + deps + "/*.js", included: true, watched: false}, 
				{pattern: "node_modules/" + deps + "/**/*", included: false, watched: false}]
		, preprocessors: {
			"**/*Spec.js": ["commonjs"]
			, "**/easing.js": ["commonjs"]
		}
		, browsers: ["Chrome", "Firefox", "PhantomJS"]
		, singleRun: true
	};
	cfg.preprocessors["node_modules/" + deps + "/**/*.js"] =  ["commonjs"];
	config.set(cfg);
};
