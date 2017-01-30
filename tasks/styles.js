import gulp from 'gulp'
import gutil from 'gulp-util'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import config from './config.js'
import plumber from 'gulp-plumber'

const outputStyle = 'compressed'

gulp.task('styles', stylesTask)

function stylesTask() {
  gulp
    .src(config.styles.src)
    .pipe(plumber({errorHandler}))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(config.browserSync.stream({match: '**/*.css'}))
}

function errorHandler(err) {
  const message = new gutil.PluginError(err.plugin, err.message).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
