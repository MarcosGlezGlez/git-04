console.log('Saludos desde terminal')

//para declaracion de variables (casi no se usa). -> var, let, const

//var: se pueden redefinir (como en Python)
//let: no se pueden redefinir
//const: como el define -> PI: 3.1416

//concatenar (los numeros los suma, los strings los pega)
//console.log('@@@ concatenar =>', a + b)

/*

//Pedir informacion (ingresar un input) y guardarlo 
let nombre = promt('Cual es el nombre?')
console.log('@@ nombre =>', nombre)

//cambiar un string a un int
let edad = promt('Cual es tu edad?')
console.log('@@@ typeof =>', typeof edad)
console.log('@@ nombre =>', parseInt(edad))

//saber que variable se esta utilizando
console.log('@@@ typeof =>', typeof nombre)

*/

//identificar documentos
console.log('@@ document => ', document)
console.log('@@ head => ', document.head)
console.log('@@ body => ', document.body)
console.log('@@ title => ', document.title)
console.log('@@ domain => ', document.domain)

document.title = "Cambiando desde JS"

/*
getElementById('titulo')
getElementByClassName('titulo') 
getElementByTabName('div')

//solo selecciona uno, el primero que salga
querySelector(selector) '#id'  <-id  .'clase' <-clase    'div'<-etiqueta

//selecciona varios y los guarda en un arreglo
querySelectorAll

//crear elementos (con nombres propios de HTML)
createElement('elemento')
*/

//evento que para deje que primero cargue todo
document.addEventListener('DOMContentLoaded', () => {
    console.log('@@@ dom => carga todo')
    console.log(document.querySelector('h1'))
})