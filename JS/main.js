"use strict";

const btn = document.querySelector(".js-bnt");
const btnRestart = document.querySelector('.js_bnt_restart');
const goodRaceType = document.querySelector(".js_good_race_type");
const resultText = document.querySelector(".js_result_text");
const badRacePoints = document.querySelector(".js_bad_race_points");
const playerPoints = document.querySelector(".js_player_points");
const computerPoints = document.querySelector(".js_computer_points");

const badRace1 = 2;
const badRace2 = 2;
const badRace3 = 2;
const badRace4 = 3;
const badRace5 = 5;

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}
///contador de partidas
let counter = 0;
let numberOfTries = 0;
function clickCounter() {
	counter++;
	numberOfTries = counter;
	console.log(`Número de partidas jugadas ${numberOfTries}`);
	if (numberOfTries===10){
		btn.classList.add('collapsed');
		btnRestart.classList.remove('collapsed');
		resultText.innerHTML = "LA PARTIDA LA HA GANADO ?????";	
	/* 	if{
			resultText.innerHTML = "LA PARTIDA LA HA GANADO";	
		}
		if else{
			resultText.innerHTML = "LA PARTIDA LA HA GANADO";
		}
		else{
			resultText.innerHTML = "LA PARTIDA LA HA GANADO";
		} */
		
	}
}

//puntuacion buenos
let goodPoints = 1;
//puntuacion malos
let badPoints = 1;
function select

function battle() {
	const randomNumber = getRandomNumber(5);
	const badRaceType = randomNumber;
	const goodRaceTypeValue = parseInt(goodRaceType.value);
    ///luchando para que el contador de puntuación sume correctamente
	if (badRaceType < goodRaceTypeValue) {
		console.log(`LOS BUENOS ${goodRaceTypeValue} LOS MALOS ${badRaceType}`);
		resultText.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
		badRacePoints.innerHTML = `La puntuación de la raza malvada es ${badRaceType}`;
		playerPoints.innerHTML = goodPoints++;
	} else if (badRaceType > goodRaceTypeValue) {
		console.log(`LOS BUENOS ${goodRaceTypeValue} LOS MALOS ${badRaceType}`);
		badRacePoints.innerHTML = `La puntuación de la raza malvada es ${badRaceType}`;
		resultText.innerHTML =
			"Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
			computerPoints.innerHTML = badPoints++;
		
	} else {
		console.log(`LOS BUENOS ${goodRaceTypeValue} LOS MALOS ${badRaceType}`);
		badRacePoints.innerHTML = `La puntuación de la raza malvada es ${badRaceType}`;
		resultText.innerHTML = "EMPATE";
	}
	
}



function handleClick(event) {
	event.preventDefault();
	battle();
	clickCounter();

}
function handleClickRestart(event) {
	event.preventDefault();
	playerPoints.innerHTML = '';
	computerPoints.innerHTML = '';
	resultText.innerHTML = "¡Comienza la batalla!";
	btn.classList.remove('collapsed');
	btnRestart.classList.add('collapsed');

}
btn.addEventListener("click", handleClick);
btnRestart.addEventListener("click", handleClickRestart);
