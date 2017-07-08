 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos
var pepito = {
  name: 'pepito',
  age: 34,
  height: 423
}

var ozu = {
  name: 'ozu',
  age: 324,
  height: 432
}

// 1. Añadir propiedades a objetos

function addWinToAthlete (athletes, event) {
  athletes.forEach(function(athlete){
    athlete.win = function() {
      console.log(`${athlete.name} won the ${event}`)
    }
  })
}


// Function Declaration

function reverseString(string) {
  var result
  return result
}


// 2. Voltea un String




// 3. Remueve numeros impares
var arr = [1,2,3,4,5]

function removeOdds(arr) {
  return arr.filter(function(element){
    return element % 2 === 0
  })
}

// 4. Funcion constructora
function Athlete(name, age, sport) {
  this.name = name
  this.age = age
  this.sport = sport
}


// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")

console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
