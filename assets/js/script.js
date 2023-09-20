/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.

    Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crar instancias (materializacion) de este tipo de objetos.

    Objeto: Materializacion de la informacion o los datos con los que cuenta mi plantilla o clase.

    
//Mostrar un objeto similar a este
let felipe = {
    nombre: "Felipe",
    apellido: "Maqueda",
    edad: 31,
    email: "felipe.Qgmail.com",
    telefono: "1234567890"
}

*/

//Creando mi primera clase

class Persona {
    //1. Propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    // 3. Defino un constructor que tomara los atributos como "material" para la instancia o creacion de mis objetos
    //El constructor es una funcion especial, cuya funcion es la de construir o instanciar un objeto
    //Al pasar los atributos como parametros es importante cuidar el ordene en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }


    //2. Metodos de mi clase o comportamiento de mi clase (funciones)
    //Para definir los metodos de mi objeto ya no utilizo la palabra reservada function
    hablar() {
        console.log("Hola, soy " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años");
    } //Fin del metodo hablar

    dormir() {
        console.log("Zzz");
    } //Fin del metodo dormir

    mostrarInfo() {
        console.log("Nombre:", this.nombre);
        console.log("Apellido:", this.apellido);
        console.log("Edad:", this.edad);
        console.log("Email:", this.email);
        console.log("Telefono:", this.telefono);
    } //Fin del metodo mostrarInfo

} //Fin de la clase Persona

/*Instancia de objeto del tipo Persona

Sintaxis basica de una instancia

variable nombreObjeto = palabra reservada new nombreClase(parametros o atributos);

*/

let persona1 = new Persona("Felipe", "Maqueda", 31, "felipe.Qgmail.com", "1234567890");
let persona2 = new Persona("Naruto", "Uzumaki", 17, "naruto@gmail.com", "0987654321");
let persona3 = new Persona("Antonio", "Torres", 20, "antonio@gmail.com", "5647126247");

//Imprimir el objeto completo
console.log(persona1);

//Invocar el metodo del objeto
persona1.dormir();
persona2.mostrarInfo();

//Imprimir dos datos del objeto (nombre y apellido)
console.log(persona1.apellido, persona2.nombre);


/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operaciones a nuestro codigo.

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstraccion


*/

//Creandouna nueva clase para aplicar mi herencia (extends)

class Paciente extends Persona {

    // 1. Definicion de Atributos o propiedades
    doctorAtiende = ""; //Nombre del doctor que atiende al paciente
    historialMedico = ""; // Si o no el historial
    alergias = ""; // Alergias del paciente

    // 3, Definicion del constructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias) {

        // 3.1. Invocar el constructor de la clase padre (Persona)
        super(nombre, apellido, edad, email, telefono); //super indica que traemos cosas de la clase superior

        // 3.2. Inicializar los atributos de la clase Paciente
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    }

    //2. Metodos
    mostrarInfo(){
        console.log("Nombre:", this.nombre);
        console.log("Apellido:", this.apellido);
        console.log("Edad:", this.edad);
        console.log("Email:", this.email);
        console.log("Telefono:", this.telefono);
        console.log("Doctor que atiende: " , this.doctorAtiende);
        console.log("Historial Medico: " , this.historialMedico);
        console.log("Alergias: " , this.alergias);
    }
}

//Instancia de un objeto del tipo Paciente

let paciente1 = new Paciente("Jesus", "MGonzalez", 31, "jesusgzz@gmail.com", "1234567890", "Dr. Simi", "No tiene", "Penicilina");

//Imprimir el objeto paciente1
console.log(paciente1);

//Uso del metodo mostrarInfo
paciente1.mostrarInfo();

paciente1.dormir();


//Diferencias entre un objeto literal y un objeto tipo JSON

//Todas las claves y valores van dentro de comillas
//Envio de informacion a servidores (JSON) <_- Los JSON se trabajan con el fetch
let objetoJSON = {
    "nombre": "Jesus", 
    "apellido": "MGonzalez", 
    "edad": 31, 
    "email": "jesusgzz@gmail.com", 
    "telefono": "1234567890", 
    "doctorAtiende": "Dr. Simi", 
    "historialMedico": "No tiene", 
    "alergias": "Penicilina" 

}

//Tratar la informacion y sacar metodos especificos (DOM)
let objetoLiteral = {
    nombre: "Jesus", 
    apellido: "MGonzalez", 
    edad: 31, 
    email: "jesusgzz@gmail.com", 
    telefono: "1234567890", 
    doctorAtiende: "Dr. Simi", 
    historialMedico: "No tiene", 
    alergias: "Penicilina" 

}

/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.
    
    Atributos
        - nombre
        - nota (calificacion)

    Metodos:
        - Constructor
        - Metodo evaluacion (si aprueba o no)
        - Metodo imprimir (imprime nombre y nota
            
    Logica de negocio
        - If para evaluar la nota (si la nota es mayor a 6, aprueba)
        - Recuperamos la informacion por medio de un prompt
        - Generamos 3 instancias para probar mi codigo (la nota sea igual a 6, la nota sea menor 6, la nota sea mayor a 6)
*/

//Creacion de la clase  (3 pasos)

class Alumno{
    
    // 1. Atributos o propiedades
    nombre;
    nota;

    // 3. Constructor donde le di identidad a el objeto (this)
    constructor(nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }

    // 2. Metodos general, un metodo que no requiere personalizacion porque aplica para cualquier objeto
    evaluacion(){

         //Condicion para saber si esta aprobado o no
         if (this.nota >= 60 && this.nota <= 100){
            console.log("Aprobado");
        } else if(this.nota < 60 && this.nota >= 0){
            console.log("Reprobado");
        } else{
            console.log("Dato erroneo");
        }

    }

    imprimirInfo(){

        console.log("Nombre del alumno: ", this.nombre);
        console.log("Nota del alumno: ", this.nota);

    }
}

//Instancias de la clase Alumno
let alumno1 = new Alumno("Felipe", 30);
let alumno2 = new Alumno("Felipe", 80);
let alumno3 = new Alumno("Felipe", 60);

alumno1.evaluacion(alumno1.nota); // Reprobado
alumno2.evaluacion(alumno2.nota); // Aprobado
alumno3.evaluacion(alumno3.nota); //Aprobado
