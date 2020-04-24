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

task('clean', () => 
    del('./dist/tmp.js')
);

task('upload', cb =>
    cmd('npm publish', {cwd: './dist/'})()
        .then(() => cb())
);

task('publish', series('command', 'copy', 'clean', 'upload'));