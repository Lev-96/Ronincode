export const server = function (done) {
   app.plugins.browsersync.init({
      server: {
      baseDir: app.path.build.html
   },
      notify: false,
      port: 3005,
   })
}