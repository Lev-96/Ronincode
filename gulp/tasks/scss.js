import dartSass from "sass"
import gulpSass from "gulp-sass"
import rename from "gulp-rename"
import cleanCss from "gulp-clean-css"
import webpCss from "gulp-webpcss"
import autoprefixer from "gulp-autoprefixer"
import gcmq from "gulp-group-css-media-queries"


const sass = gulpSass(dartSass)

export const scss = () => {
   return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "sass",
            message: 'Error, <%= error.message %>'
         })
      ))
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(app.plugins.if(
         app.isBuild,
         gcmq()
      ))
      .pipe(app.plugins.if(
         app.isBuild,
         webpCss({
            webpClass: ".webp",
            noWebpClass: "no-webp"
         })
      ))
      .pipe(rename({
            extname: ".min.css"
         })
      )
      .pipe(app.plugins.if(
         app.isBuild,
         autoprefixer({
            grid: true,
            overrideBrowserslist: "last 3 versions",
            cascade: true
         })
      ))
      .pipe(app.plugins.if(
         app.isBuild,
         cleanCss()
      ))
      .pipe(app.gulp.dest(app.path.build.scss))
      .pipe(app.plugins.browsersync.stream())
}
