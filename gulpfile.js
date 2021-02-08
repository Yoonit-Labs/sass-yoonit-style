const {
  src,
  dest,
  series
} = require('gulp')
const rimraf = require('rimraf')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const entryPoint = './src/index.sass'

sass.compiler = require('node-sass')

const remove = f =>
  rimraf('./dist', f)

const builder = _ =>
  src(entryPoint)
    .pipe(
      sass
        .sync({
          outputStyle: 'compressed'
        })
        .on(
          'error',
          sass.logError
        )
    )
    .pipe(
      rename({
        basename: "yoonit",
        extname: ".min.css"
      })
    )
    .pipe(
      dest('./dist')
    )

exports.default = series(remove, builder)
