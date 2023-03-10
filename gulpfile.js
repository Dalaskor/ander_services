import browserSync from "browser-sync";
import gulp from "gulp";

// Конфигурация
import app from "./config/app.js";
import path from "./config/path.js";

// Задачи
import clear from "./tasks/clear.js";
import font from "./tasks/font.js";
import img from "./tasks/img.js";
import js from "./tasks/js.js";
import pug from "./tasks/pug.js";
import scss from "./tasks/scss.js";

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Наблюдение
const watcher = () => {
  // For HTML
  // watch(path.html.watch, html).on('all', browserSync.reload);
  // For PUG
  gulp.watch(path.pug.watch, pug).on("all", browserSync.reload);
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
  gulp.watch(path.js.watch, js).on("all", browserSync.reload);
  gulp.watch(path.img.watch, img).on("all", browserSync.reload);
  gulp.watch(path.font.watch, font).on("all", browserSync.reload);
};

const build = gulp.series(
  clear,
  gulp.parallel(pug, scss, js, img, font) // or html + css
);

const dev = gulp.series(build, gulp.parallel(watcher, server));

// Задачи
export { clear };
// exports.html = html;
export { pug };
export { scss };
export { js };
export { img };
export { font };

// Сборка
export default app.isProd ? build : dev;

console.log(process.argv);
