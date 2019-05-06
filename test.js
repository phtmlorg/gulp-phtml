import fs from 'fs';
import path from 'path';
import pEvent from 'p-event';
import phtml from '.';
import phtmlSelfClosing from '@phtml/self-closing';
import avatest from 'ava';
import Vinyl from 'vinyl';

test('basic');

test('basic:self-closing', {
	plugins: phtmlSelfClosing()
});

function test (name, opts, config) {
	avatest(`gulp-phtml${name ? ` ${name}`: ''}`, async t => {
		const testBase = name.split(':')[0];
		const testFull = name.split(':').join('.');

		// test paths
		const sourcePath = path.resolve('test', Object(config).source || `${testBase}.html`);
		const expectPath = path.resolve('test', Object(config).expect || `${testFull}.expect.html`);
		const resultPath = path.resolve('test', Object(config).result || `${testFull}.result.html`);

		const stream = phtml(opts);
		const promise = pEvent(stream, 'data');
		const sourceHTML = fs.readFileSync(sourcePath, 'utf8');
		const expectHTML = fs.readFileSync(expectPath, 'utf8');

		stream.end(
			new Vinyl({
				base: __dirname,
				path: sourcePath,
				contents: Buffer.from(sourceHTML)
			})
		);

		const result = await promise;
		const resultHTML = result.contents.toString();

		fs.writeFileSync(resultPath, resultHTML);

		return t.is(expectHTML, resultHTML);
	});
}
