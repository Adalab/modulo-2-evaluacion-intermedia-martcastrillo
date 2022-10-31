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

function battle() {
	const randomNumber = getRandomNumber(5);
	const badRaceType = randomNumber;
	const goodRaceTypeValue = parseInt(goodRaceType.value);
    let winningGoods = 0;
    let winningBads = 0;

    ///luchando para que el contador de puntuación sume correctamente
	if (badRaceType < goodRaceTypeValue) {
		console.log(`LOS BUENOS ${goodRaceTypeValue} LOS MALOS ${badRaceType}`);
		resultText.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
		badRacePoints.innerHTML = `La puntuación de la raza malvada es ${badRaceType}`;
		playerPoints.innerHTML = winningGoods + 1;
	} else if (badRaceType > goodRaceTypeValue) {
		console.log(`LOS BUENOS ${goodRaceTypeValue} LOS MALOS ${badRaceType}`);
		badRacePoints.innerHTML = `La puntuación de la raza malvada es ${badRaceType}`;
		resultText.innerHTML =
			"Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
		computerPoints.innerHTML = winningBads + 1;
	} else {
		console.log(`LOS BUENOS ${goodRaceTypeValue} LOS MALOS ${badRaceType}`);
		badRacePoints.innerHTML = `La puntuación de la raza malvada es ${badRaceType}`;
		resultText.innerHTML = "EMPATE";
	}
	
}

///contador de partidas
let counter = 0;
let numberOfTries = 0;
function clickCounter() {
	counter++;
	numberOfTries = counter;
	console.log(`Número de partidas jugadas ${numberOfTries}`);
}

function handleClick(event) {
	event.preventDefault();
	battle();
	clickCounter();
}

btn.addEventListener("click", handleClick);
