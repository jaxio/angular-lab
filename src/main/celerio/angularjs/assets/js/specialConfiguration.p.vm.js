$output.webapp("assets\js", "specialConfiguration.js")##

/** ResourceProvider special configuration (very important !) */
app.config(['${dollar}resourceProvider', function(${dollar}resourceProvider) {
	// Don't strip trailing slashes from calculated URLs
	${dollar}resourceProvider.defaults.stripTrailingSlashes = false;
}]);