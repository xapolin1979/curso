  class Curso{
    titulo:string;
    descripcion:string;
    alumno:Alumno[]=new Array();
    
    constructor(titulo:string,descripcion:string){
        this.titulo=titulo;
        this.descripcion=descripcion;
       
    }
    
    addAlumno(alumno:Alumno):void{
        this.alumno.push(alumno);
    }
}