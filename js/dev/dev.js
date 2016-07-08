//!steal-remove-start
module.exports = {
	warnTimeout: 5000,
	logLevel: 0,
	/**
	 * Adds a warning message to the console.
	 * ```
	 * dev.warn("something evil");
	 * ```
	 * @param {String} out the message
	 */
	warn: function (out) {
		var ll = this.logLevel;
		if (ll < 2) {
			Array.prototype.unshift.call(arguments, 'WARN:');
			if (typeof window !== undefined && window.console && console.warn) {
				this._logger("warn", Array.prototype.slice.call(arguments));
			} else if (window.console && console.log) {
				this._logger("log", Array.prototype.slice.call(arguments));
			} else if (window.opera && window.opera.postError) {
				window.opera.postError("steal.js WARNING: " + out);
			}
		}
	},
	/**
	 * Adds a message to the console.
	 * ```
	 * dev.log("hi");
	 * ```
	 * @param {String} out the message
	 */
	log: function (out) {
		var ll = this.logLevel;
		if (ll < 1) {
			if (window.console && console.log) {
				Array.prototype.unshift.call(arguments, 'Info:');
				this._logger("log", Array.prototype.slice.call(arguments));
			} else if (window.opera && window.opera.postError) {
				window.opera.postError("steal.js INFO: " + out);
			}
		}
	},
	_logger: function (type, arr) {
		try {
			console[type].apply(console, arr);
		} catch(e) {
			console[type](arr);
		}
	}
};
//!steal-remove-end
