"use strict";
var Curso = /** @class */ (function () {
    function Curso(titulo, descripcion) {
        this.alumno = new Array();
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
    Curso.prototype.addAlumno = function (alumno) {
        this.alumno.push(alumno);
    };
    return Curso;
}());
