import zipPlugin from "gulp-zip"
import { deleteAsync } from "del"


export const zip = () => {
   deleteAsync(`${app.path.rootFolder}.zip`)
   return app.gulp.src(`${app.path.buildFolder}/**/*.*`)
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "ZIP",
            message: 'Error, <%= error.message %>'
         })
      ))
      .pipe(zipPlugin('front-gevorgyan.zip'))
      .pipe(app.gulp.dest('./'))

}
