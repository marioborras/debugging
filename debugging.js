//1

let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];
let userInput = ["rock", "paper", "scissors"];

function randomFrom(array) {
return array[(Math.ceil(Math.random()*3)) ];
}

function checkInput(input, computerChoices) {
  if (input === "quit") {
    return true;
  }
  
  let computerChoice = randomFrom(computerChoices);
  
if(computerChoice === "rock" && input === "scissors"){
alert("Computer wins!");
return true;
} else if(userInput === "rock" && input === "scissors"){
alert("YOU WIN!");
return true;
} else if (computerChoice === "scissors" && input === "paper"){
alert("Computer wins!");
return true;
} else if(userInput === "scissors" && input === "paper"){
alert("YOU WIN!");
return true;
} else if (computerChoice === "paper" && input === "rock"){
alert("Computer wins!");
return true;
} else if(userInput === "paper" && input === "rock"){
alert("YOU WIN!");
return true;
}

}

function start(gameOver, computerChoices) {
  while (!gameOver){
    let playerInput = '';
    prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");

gameOver = checkInput(playerInput, computerChoices);

playerInput = "paper";
playerInput = "scissors";
playerInput = "rock";

} 
}



start(gameOver, computerChoices)

//2

function encode(word) {
  //somewhere to store the converted characters
  let result = [];
  //next we loop over each character in the string.
  for (let position of word) {
  // and save the charcode to the array
  result.push(word.charCodeAt(word.indexOf(position))); // change this to return index instead of actual char
  }
  // and return that list of codes, separated by colons
  return result.join(':');
}

function decode(hash) {
  //split the code by semicolons!
  let arr = hash.split(':');
  // again somewhere to put our codes
  let result = [];
  //loop over the codes
  for (let code of arr) {
  //change the code back to the string character equivalent
  result.push(String.fromCharCode(code)); //
  }
  return result.join('');
}


let message = "100:111:103";
let encodedMessage = encode(message);
let decodedMessage = decode(message);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);