 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos
var nombre1 = {
	name: "oscar",
	age: 26,
	height: 1.75
}

var nombre2 = {
	name: "maria",
	age: 29,
	height: 1.45
}

// 1. Añadir propiedades a objetos
function addWinToAthlete(athletes, event){
	athletes.forEach(function(athlete){
		athlete.win = function(){
			console.log(athlete.name + "won the" + event)
		}
	})
}

// Function Declaration
function reverseString(string){
	//logica para volterar
	return result
}


// 2. Voltea un String




// 3. Remueve numeros impares
var arr = [1,2,3,4,5]
function removeOdds(arr){
	return arr.filter(function(element){
		element % 2 === 0
	}
}


// 4. Funcion constructora
function Athlete(name,age,sport){
this.name
this.age
this.sport
} 



// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
