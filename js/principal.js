/*Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota 
máxima es 20, y que los estudiantes aprueban con un mínimo de 10. 
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que 
inserte un estudiante en una posición dada (siendo 0 la primera posición). 
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: insertarEstudEnPosicion. 
Parámetros: estudiantes (array de objetos estudiante), nombre, semestre, nota y posición
Retorno: array de objetos estudiante con el estudiante insertado en la posición indicada 
(siendo 0 la primera posición).*/

let insertarEtudiantePosicion = (estudiantes,nombre,semestre,nota,posicion) => {
    let index = posicion -1;
    let estudiante = [];
    for(let i= 0; i < estudiantes.length; i++){
        if(estudiante.length == index){
            estudiante.push({nombre: nombre, semestre: semestre, nota: nota}) 
        }
        estudiante.push(estudiantes[i])
    }
    return estudiante;
}


let estudiantes = [
    {nombre: "jose", semestre: 5, nota: 18},
    {nombre: "ana",  semestre: 3, nota: 8},
    {nombre: "maria",  semestre: 5, nota: 15},
    {nombre: "jorge",  semestre: 1, nota: 9},
    {nombre: "luis", semestre: 4, nota: 14}
]

let salida = document.getElementById("salida");

let nombre = prompt("Indique el nombre del nuevo estudiante");
let semestre = prompt("Indique el semestre del nuevo estudiante");
let nota = prompt("Indique la nota del nuevo estudiante");
let posicion = prompt("Especifique la posición donde desea ingresar al nuevo estudiante");

salida.innerHTML = `lista de estudiantes`
salida.innerHTML += `<br>`+JSON.stringify(insertarEtudiantePosicion(estudiantes, nombre, semestre, nota, posicion));