"use strict";
var curso;
function submitCurso() {
    var crearCurso = document.getElementById("crearCurso");
    var descripcionCurso = document.getElementById("descripcionCurso");
    if (crearCurso.value == "") {
        crearCurso.classList.add('is-invalid');
        crearCurso.classList.remove('is-valid');
    }
    else {
        crearCurso.classList.remove('is-invalid');
        crearCurso.classList.add('is-valid');
    }
    if (descripcionCurso.value == "") {
        descripcionCurso.classList.add('is-invalid');
        descripcionCurso.classList.remove('is-valid');
    }
    else {
        descripcionCurso.classList.remove('is-invalid');
        descripcionCurso.classList.add('is-valid');
    }
    if (crearCurso.value != "" && descripcionCurso.value != "") {
        curso = new Curso(crearCurso.value, descripcionCurso.value);
        showCurso();
        show();
        return;
    }
}
function showCurso() {
    var cursoTi = document.getElementById("cursoTi");
    var description = document.getElementById("description");
    cursoTi.innerText = " Curso : " + curso.titulo;
    description.innerText = "Descricion :  " + curso.descripcion;
}
function submitAlumno() {
    var nombreAlumno = document.getElementById("nombreAlumno");
    var valor = nombreAlumno.value;
    nombreAlumno.value = valor.charAt(0).toUpperCase() + valor.slice(1);
    var dni = document.getElementById("dni");
    var fecha = document.getElementById("fecha");
    var alertaDNI = document.getElementById("alertaDNI");
    var dniValue = dni.value.trim();
    alertaDNI.style.display = "none";
    // Expresión regular para validar el formato del DNI (8 dígitos numéricos)
    var dniPattern = /^\d{8}[A-Z]$/i;
    if (nombreAlumno.value == "") {
        nombreAlumno.classList.add('is-invalid');
        nombreAlumno.classList.remove('is-valid');
    }
    else {
        nombreAlumno.classList.remove('is-invalid');
        nombreAlumno.classList.add('is-valid');
    }
    if (!dniPattern.test(dniValue)) {
        dni.classList.add('is-invalid');
        dni.classList.remove('is-valid');
    }
    else {
        dni.classList.remove('is-invalid');
        dni.classList.add('is-valid');
    }
    if (fecha.value == "") {
        fecha.classList.add('is-invalid');
        fecha.classList.remove('is-valid');
    }
    else {
        fecha.classList.remove('is-invalid');
        fecha.classList.add('is-valid');
    }
    if (nombreAlumno.value != "" && dniPattern.test(dniValue) && fecha.value != "") {
        var dniExistente = false;
        for (var i = 0; i < curso.alumno.length; i++) {
            if (curso.alumno[i].dni === dni.value) {
                dniExistente = true;
                break;
            }
        }
        if (dniExistente) {
            dni.classList.remove('is-invalid');
            dni.classList.remove('is-valid');
            alertaDNI.style.display = "block";
        }
        else {
            var alumno = new Alumno(nombreAlumno.value, dni.value, fecha.value);
            curso.addAlumno(alumno);
            nombreAlumno.value = "";
            nombreAlumno.classList.remove('is-invalid');
            nombreAlumno.classList.remove('is-valid');
            dni.value = "";
            dni.classList.remove('is-invalid');
            dni.classList.remove('is-valid');
            fecha.value = "";
            fecha.classList.remove('is-invalid');
            fecha.classList.remove('is-valid');
            showAlumno();
        }
    }
}
function showAlumno() {
    var tituloAlumnos = document.getElementById("tituloAlumnos");
    var imprimir = document.getElementById("imprimir");
    var resultCurso = document.getElementById("result-curso");
    resultCurso.style.display = "block";
    imprimir.innerHTML = "";
    tituloAlumnos.innerHTML = "Alumnos: ";
    for (var i = 0; i <= curso.alumno.length; i++) {
        var numeroAlumno = i + 1;
        imprimir.innerHTML += "<p> <b>Alumno " + numeroAlumno + "</b> <br> " + "Nombre: " + curso.alumno[i].nombre + "<br>   Dni: " + curso.alumno[i].dni + "<br>   fecha de nacimiento: " + curso.alumno[i].fecha + "</p>";
    }
}
function show() {
    var createCurso = document.getElementById("create-curso-form");
    var carWheel = document.getElementById("create-wheel-form");
    createCurso.style.display = "none";
    carWheel.style.display = "block";
}
