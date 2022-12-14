import webp from "gulp-webp"
import imagemin from "gulp-imagemin"
import svgSprite from "gulp-svg-sprite"


export const spriteSvg = () => {
   return app.gulp.src(app.path.src.svgIcons)
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "SVG",
            message: 'Error, <%= error.message %>'
         })
      ))
      .pipe(svgSprite({
         mode: {
            stack: {
               sprite: `../icons/sprite.svg`,
               example: true
            }
         }
      }))
      .pipe(app.gulp.dest(app.path.build.images))
}
