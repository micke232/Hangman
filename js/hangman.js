//randomizar ut ett ord från en array
var hangWord = ["apa", "banan", "ninja", "köttbulle"];
var randomizer = Math.floor(Math.random()*4);
var word = hangWord[randomizer];
//============================
console.log(word);

//skriver ut längden på det valda ordet.
var wordLength = document.getElementById("wordLength");
wordLength.innerHTML = "The word is " + word.length + " characters.";
//======================

//Lägger in varje bokstav separat i en array
var answer = [];
for(i = 0; i < word.length; i++){
	answer.push(word[i]);
}
//=====================

console.log(answer);
//Skapa en variabel som visar med _ hur många bokstäver ordet består av
var output = [];
for(j = 0; j < word.length; j++){
	output.push("_");
}
//====================

//Skriver ut _ för varje bokstav ordet består av
var letterOutput = document.getElementById("letterOutput");
for(k = 0; k < answer.length; k++){
	var td = document.createElement("td");
	td.innerHTML = output[k];
	letterOutput.appendChild(td);
}
//======================
