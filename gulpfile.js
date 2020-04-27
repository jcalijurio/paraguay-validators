const { task, dest, src, series } = require('gulp');
const cmd = require('gulp-run-command').default;
const del = require('del');
const header = require('gulp-header');

const pkg = require('./package.json');

const banner = ['/**',
    ' * <%= pkg.name %>',
    ' * <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');

task('copy', () =>
    src(['package.json', 'LICENSE', 'README.md'])
        .pipe(dest('./dist/'))
);

task('command', cb =>
    cmd('npm run build')()
        .then(() => cb())
);

task('clean', cb =>
    del(['./dist/tmp.js', './dist/index.d.ts', './dist/index.js'])
        .then(() => cb())
);

task('banner', () => src('./dist/paraguay-validators.min.js')
    .pipe(header(banner, { pkg: pkg }))
    .pipe(dest('./dist/'))
);

task('upload', cb =>
    cmd('npm publish', { cwd: './dist/' })()
        .then(() => cb())
);

task('publish', series('command', 'copy', 'clean', 'banner', 'upload'));