const { src, dest, watch} = require("gulp");
        //src sirve para identificar el archivo
        //dest sirve para almacenarlo
const sass = require("gulp-sass")(require("sass"));

function css  (done) {
    // identificar el archivo sass
    src('src/scss/**/*.scss')
    
        //compilarlo    
        .pipe( sass() )

        //almacenar en el disco duro
        .pipe( dest('build/css') ) ;

    done(); // Este es un callback que avisa a gulp cuando llemago al final
}

function dev (done) {
    watch('src/scss/**/*.scss', css)

    done();
}

  

exports.css = css;
exports.dev = dev;