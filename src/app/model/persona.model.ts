export class persona{
    id?: number; // el signo de pregunta se agrega para que el atributo sea opcional
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }

    getNombreCompleto(): String{
        return this.nombre + " " + this.apellido;
    }
}