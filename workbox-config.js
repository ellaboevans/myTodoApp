module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,html,css,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};