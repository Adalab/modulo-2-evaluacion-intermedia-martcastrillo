"use strict";



const btn = document.querySelector('.js-bnt');
const goodRaceType = document.querySelector('.js_good_race_type');
const resultText = document.querySelector('.js_result_text');

const badRace1 = 2;
const badRace2 = 2;
const badRace3 = 2;
const badRace4 = 3;
const badRace5 = 5;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function battle (){
    const randomNumber = getRandomNumber(5);
    const badRaceType = randomNumber;
    const goodRaceTypeValue = parseInt (goodRaceType.value);

  if (badRaceType < goodRaceTypeValue) {
    console.log(badRaceType);
    resultText.innerHTML= 'Gana el BIEN';
  } else if(badRaceType > goodRaceTypeValue){
    console.log(badRaceType);
    resultText.innerHTML= 'Gana el MAL';
  }
  else{
    console.log(badRaceType);
    resultText.innerHTML= 'Se ha producido un empate';
  }
}




function handleClick(event) {
    event.preventDefault();
     battle();
    }



btn.addEventListener('click', handleClick);