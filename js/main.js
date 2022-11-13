"use strict";

const btn = document.querySelector(".js-bnt");
const btnRestart = document.querySelector(".js_bnt_restart");
const goodRaceType = document.querySelector(".js_good_race_type");
const resultText = document.querySelector(".js_result_text");
const badRacePoints = document.querySelector(".js_bad_race_points");
const playerPoints = document.querySelector(".js_player_points");
const computerPoints = document.querySelector(".js_computer_points");


function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

let counter = 0;
let numberOfTries = 0;
//puntuacion buenos
let goodPoints = 1;
//puntuacion malos
let badPoints = 1;
function clickCounter() {
	counter++;
	numberOfTries = counter;
	console.log(`Número de partidas jugadas ${numberOfTries}`);
	if (numberOfTries === 10) {
		btn.classList.add("collapsed");
		btnRestart.classList.remove("collapsed");
		if (goodPoints > badPoints) {
			resultText.innerHTML = "LA PARTIDA LA HA GANADO EL BIEN";
			resultText.classList.add('resultboxGood');
		} else if (goodPoints < badPoints) {
			resultText.innerHTML = "LA PARTIDA LA HA GANADO EL MAL";
			resultText.classList.add('resultboxBad');
		} else {
			resultText.innerHTML = "SE HA PRODUCIDO UN EMPATE";
			resultText.classList.add('resultbox');
		}
		//reinicio del contador
		counter = 0;
		goodPoints = 1;
		badPoints = 1;
	}
}

function selectBadRaceForce(resultRandom) {
	let badRaceType = 0;
	if (resultRandom === 1 || resultRandom === 2 || resultRandom === 3) {
		badRaceType = 2;
	} else if (resultRandom === 4) {
		badRaceType = 3;
	} else if (resultRandom === 5) {
		badRaceType = 5;
	}
	return badRaceType;
}

function battle() {
	const goodRaceTypeValue = parseInt(goodRaceType.value);
	const randomNumber = getRandomNumber(5);
	const badRaceValue = selectBadRaceForce(randomNumber);

	///contador de partidas
	if (badRaceValue < goodRaceTypeValue) {
		console.log(`LOS BUENOS ${goodRaceTypeValue} LOS MALOS ${badRaceValue}`);
		resultText.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
		badRacePoints.innerHTML = `La fuerza que los malos han usado es ${badRaceValue}`;
		resultText.classList.add('resultboxGood');
		resultText.classList.remove('resultboxBad');
		playerPoints.innerHTML = goodPoints++;
	} else if (badRaceValue > goodRaceTypeValue) {
		console.log(`LOS BUENOS ${goodRaceTypeValue} LOS MALOS ${badRaceValue}`);
		badRacePoints.innerHTML = `La fuerza que los malos han usado es ${badRaceValue}`;
		resultText.classList.add('resultboxBad');
		resultText.classList.remove('resultboxGood');
		resultText.innerHTML =
			"Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
		computerPoints.innerHTML = badPoints++;
	} else {
		console.log(`LOS BUENOS ${goodRaceTypeValue} LOS MALOS ${badRaceValue}`);
		badRacePoints.innerHTML = `La fuerza que los malos han usado es ${badRaceValue}`;
		resultText.innerHTML = "EMPATE";
		resultText.classList.remove('resultboxGood');
		resultText.classList.remove('resultboxBad');
	}
}

function handleClickRestart(ev) {
	ev.preventDefault();
	badRacePoints.innerHTML = "";
	playerPoints.innerHTML = "";
	computerPoints.innerHTML = "";
	resultText.innerHTML = "¡Comienza la batalla!";
	btn.classList.remove("collapsed");
	btnRestart.classList.add("collapsed");
	resultText.classList.add('resultbox');

}

function handleClick(event) {
	event.preventDefault();
	battle();
	clickCounter();
}

btn.addEventListener("click", handleClick);
btnRestart.addEventListener("click", handleClickRestart);
