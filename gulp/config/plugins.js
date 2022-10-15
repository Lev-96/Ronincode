import replace from "gulp-replace"
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import newer from "gulp-newer"
import ifPlugin from "gulp-if"
import browsersync from "browser-sync"





export const plugins = {
   replace, 
   plumber,
   notify,
   browsersync,
   newer,
   if: ifPlugin
}