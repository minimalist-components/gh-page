import gulp from 'gulp'
import packageFiles from 'package-files'
import minifyCss from 'gulp-minify-css'
import concat from 'gulp-concat'

gulp.task('vendorCSS', vendorCSSTask)

function vendorCSSTask() {
  const dependencies = packageFiles()
    .filter(dep => dep.endsWith('.css'))

  return gulp
    .src(dependencies)
    .pipe(concat('vendor.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./public'))
}
