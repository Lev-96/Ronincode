import gulp from "gulp"
import { path } from "./gulp/config/path.js"
import { plugins } from './gulp/config/plugins.js';

global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path,
   gulp,
   plugins,
}


import { php } from "./gulp/tasks/php.js"
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { scss } from "./gulp/tasks/scss.js"
import { server } from "./gulp/tasks/server.js"
import { js } from "./gulp/tasks/js.js"
import { images } from "./gulp/tasks/images.js"
import { spriteSvg } from "./gulp/tasks/spriteSvg.js"
import { zip } from "./gulp/tasks/zip.js"



const watcher = function() {
   gulp.watch(app.path.watch.html, html)
   gulp.watch(app.path.watch.scss, scss)
   gulp.watch(app.path.watch.js, js)
   gulp.watch(app.path.watch.images, images)
   


}

const mainTasks = gulp.parallel(php, html, scss, js, images, spriteSvg)


const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZip = gulp.series(reset, mainTasks,zip)

export {dev}
export { build }
export { deployZip }
gulp.task('default', dev)
