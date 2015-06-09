//randomizar ut ett ord från en array
//var hangWord = ["apa", "banan", "ninja", "köttbulle"];
//var randomizer = Math.floor(Math.random()*4);
//var word = hangWord[randomizer];
//============================

var counter = 0;
var guesses = 5;
var counterDiv = document.getElementById("counter");
var guessButton = document.getElementById("guessButton");
var output = []; //Skapa en variabel som visar med _ hur många bokstäver ordet består av
var word = 0; //Användare anger ett ord för gissning
var wordLength = document.getElementById("wordLength"); //skriver ut längden på det valda ordet.
var answer = []; //Lägger in varje bokstav separat i en array
var noTriesLeftDiv = document.getElementById("endOfTries");
var newGameButton = document.getElementById("newGame"); //reloads page
var wordButton = document.getElementById("addButton");


console.log(word);
console.log(answer);

for(var i = 0; i < word.length; i++){
  answer.push(word[i]);
}
for(var j = 0; j < word.length; j++){
  output.push("_");
}

wordButton.addEventListener("click", function(){
  word = document.getElementById("addWord").value
  wordLength.innerHTML = "The word is " + word.length + " characters.";
  wordButton.remove();
  document.getElementById("addWord").remove();
});


function answerOutput(){ //Funktion som skriver ut _ för bokstäver man inte gissat
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

answerOutput();
var wrongLetteArray = []; // Tar emot gissning och lägger det gissade i en variabel
guessButton.addEventListener("click", function(){
  var guess = document.getElementById("guess");
  var guesslength = guess.value;
  if(guesslength.length > 1){ // Sätter så du bara kan gissa en bokstav åt gången
    alert("You can only guess one letter per guess")
  }
  var wrongLetters = document.getElementById("wrongLetters");
  var noLetter = true; //Kollar om den gissade bokstaven finns i ordet
  for(var l = 0; l < 5; l++){
    for(var m = 0; m < answer.length; m++)
      if(guess.value == answer[m]){
        output[m] = guess.value.toUpperCase();
        noLetter = false;
      }
  }
  if (guesses == counter + 1){
    noTriesLeftDiv.style.display = "block";
    guessButton.remove();
    newGameButton.addEventListener("click", function(){
      
      location.reload();
    });
  }
  if(noLetter){
    var wrong = document.createElement("td");
    wrongLetteArray.push(guess.value);
    wrong.innerHTML = guess.value.toUpperCase();
    wrongLetters.appendChild(wrong);
    counter++;
    counterDiv.innerHTML = "Number of guesses = " + counter + "<br>" + "Number of guesses left = " + (guesses - counter);
  }
  console.log(wrongLetteArray);
  answerOutput()
  guess.value = "";
  var guessWord = output.join("");
  if(guessWord == word.toUpperCase()){
    alert("WINNING!!");
  }
});












