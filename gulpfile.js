const { task, dest, src, series } = require('gulp');
const cmd = require('gulp-run-command').default;
const del = require('del');

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

task('upload', cb =>
    cmd('npm publish', {cwd: './dist/'})()
        .then(() => cb())
);

task('publish', series('command', 'copy', 'clean', 'upload'));