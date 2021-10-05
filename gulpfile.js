/**
 * ██╗   ██╗ ██████╗  ██████╗ ███╗   ██╗██╗████████╗
 * ╚██╗ ██╔╝██╔═══██╗██╔═══██╗████╗  ██║██║╚══██╔══╝
 *  ╚████╔╝ ██║   ██║██║   ██║██╔██╗ ██║██║   ██║
 *   ╚██╔╝  ██║   ██║██║   ██║██║╚██╗██║██║   ██║
 *    ██║   ╚██████╔╝╚██████╔╝██║ ╚████║██║   ██║
 *    ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝
 *
 * https://yoonit.dev - about@yoonit.dev
 *
 * Sass Yoonit Style
 * The SASS Atomic Design System that powers Web & Native Yoonit Components
 *
 * Luigui Delyer, Vitória Costa, Sabrina Sampaio, Gabriel Moraes, Tiago Brito, Fernando Junior, Ronalson Filho, Gabriel Moraes, Gabriel Mule & Gabriel Rizzo @ 2020-2021
 */

const {
  src,
  dest,
  series
} = require('gulp')
const rimraf = require('rimraf')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('sass'));
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
