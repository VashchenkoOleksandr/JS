var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет

gulp.task('sass', function() { // Создаем таск "sass"
    return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        /**
         * Преобразуем Sass в CSS посредством gulp-sass + ведет лог ошибок в sass файле.
         * nested - вложенный, по умолчанию;
         * expanded - развернутый;
         * compact - компактный, когда селектор и его свойства в фигурных скобках выводятся в одну строку;
         * compressed - сжатый. Кроме того, благодаря обработке .on('error', sass.logError), если возникнет ошибка,
         * нам не придется перезагружать команду выполенния Gulpfile и мы будем видеть, в какой строке Sass файла у нас ошибка.
         * В примерах я буду использовать стиль вывода expanded для наглядности.
         **/
        .pipe(gulp.dest('css')) // Выгружаем результата в папку css
});

gulp.task('watch', function() {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']);