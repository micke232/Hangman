//randomizar ut ett ord från en array
//var hangWord = ["apa", "banan", "ninja", "köttbulle"];
//var randomizer = Math.floor(Math.random()*4);
//var word = hangWord[randomizer];
//============================
console.log(word);
var counter = 0;
var guesses = 10;
var counterDiv = document.getElementById("counter");
//Användare anger ett ord för gissning
var word = prompt("Ange ett ord för gissning!!");
//=============================

//skriver ut längden på det valda ordet.
var wordLength = document.getElementById("wordLength");
wordLength.innerHTML = "The word is " + word.length + " characters.";
//======================

//Lägger in varje bokstav separat i en array
var answer = [];
for(var i = 0; i < word.length; i++){
	answer.push(word[i]);
}
//=====================

console.log(answer);
//Skapa en variabel som visar med _ hur många bokstäver ordet består av
var output = [];
for(var j = 0; j < word.length; j++){
	output.push("_");
}
//====================

//Funktion som skriver ut _ för bokstäver man inte gissat
function answerOutput(){
	var letterOutput = document.getElementById("letterOutput");
		if(letterOutput.hasChildNodes()){
    	while(letterOutput.childNodes.length >= 1){
        letterOutput.removeChild(letterOutput.firstChild);       
    	} 
		}
	for(var k = 0; k < answer.length; k++){
		var td = document.createElement("td");
		td.innerHTML = output[k];
		letterOutput.appendChild(td);
	}
}
//======================
answerOutput();

//Tar emot gissning och lägger det gissade i en variabel
var guessButton = document.getElementById("guessButton");
guessButton.addEventListener("click", function(){
  
	var guess = document.getElementById("guess");
	var guesslength = guess.value;
//	sätter så du bara kan gissa en bokstav åt gången
	if(guesslength.length > 1){
		alert("You can only guess one letter per guess")
	}
var wrongLetters = document.getElementById("wrongLetters");
//Kollar om den gissade bokstaven finns i ordet
	var noLetter = true;
	for(var l = 0; l < 5; l++){
		for(var m = 0; m < answer.length; m++)
			if(guess.value == answer[m]){
				output[m] = guess.value.toUpperCase();
				noLetter = false;
				}
		}
	if(noLetter){
		var wrong = document.createElement("td");
		wrong.innerHTML = guess.value.toUpperCase();
		wrongLetters.appendChild(wrong);
    counter++;
    counterDiv.innerHTML = "Number of guesses = " + counter + "<br>" + "Number of guesses left = " + (guesses - counter);
	}
	
	answerOutput()
	guess.value = "";
	var guessWord = output.join("");
	if(guessWord == word.toUpperCase()){
		alert("WINNING!!");
	}
  });
//===========================











