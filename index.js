const through = require('through2');
const PluginError = require('plugin-error');
const phtml = require('phtml');

module.exports = options => {
	options = Object(options);

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);

			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-phtml', 'Streaming not supported'));

			return;
		}

		try {
			return phtml.process(
				file.contents.toString(),
				options.processOptions,
				options.plugins
			).then(
				result => {
					file.contents = Buffer.from(result.html);

					this.push(file);

					cb();
				},
				error => {
					throw error;
				}
			);
		} catch (error) {
			this.emit('error', new PluginError('gulp-phtml', error));
		}

		cb();
	});
};
