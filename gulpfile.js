'use strict';

const gulp        = require('gulp');
const fileinclude = require('gulp-file-include');
const server = require('browser-sync').create();
const { watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');

const paths = {
  scripts: {
    src: './',
    dest: './build/'
  }
};

// Reload Server
async function reload() {
  server.reload();
}

// Sass compiler
async function compileSass() {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
}

// Copy assets after build
async function copyAssets() {
  gulp.src(['./assets/**/*'])
    .pipe(gulp.dest(paths.scripts.dest+'assets/'));
}

// Build files html and reload server
async function buildAndReload() {
    await includeHTML();
    await copyAssets();
    reload();
}

async function includeHTML(){
  return gulp.src([
    '*.html',
    '!header.html', // ignore
    '!footer.html' // ignore
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}
exports.includeHTML = includeHTML;

exports.default = async function() {

    //await compileSass();
    //watch('./sass/**/*.scss', series(compileSass));

    // Init serve files from the build folder
    server.init({
        server: {
        baseDir: paths.scripts.dest
        }
    });
    // Build and reload at the first time
    buildAndReload();
    // Watch task
    watch(["*.html", "./assets/**/*"], series(buildAndReload));

};