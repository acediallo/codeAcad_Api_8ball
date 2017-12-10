//Variable declarations
let userName = '';
//let  userQuestion = prompt("What is your question");
let  userQuestion ="What is your question?";
let eightBall = '';

//random number between min=0 and max=7
let max = 7;
let min = 0;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

//test my switch: console.log(randomNumber);


//if user has name say Hello with his name 
userName ? console.log(`Hello, ${userName}!`): console.log("Hello!");

switch (randomNumber){
    
  case 0 : eightBall = "Signs point to yes";
    break;
    
  case 1 : eightBall ="It is certain";
    break; 
  
  case 2 : eightBall ='It is decidedly so';
    break;
    
  case 3 : eightBall ='Reply hazy try again'; 
    break;
    
  case 4 : console.log('Cannot predict now');   
    break;
    
  case 5 : eightBall ="Don't count on it";  
    break;
    
  case 6 : eightBall ="My sources say no";  
    break;
    
  case 7 : ceightBall ="Outlook not so good";  
    break;        
    
  default: console.log("Hum...Your number seems wrong!");
    
    break;
}

console.log(`Our guest, ${userName} asked this question:${userQuestion}`);
console.log(eightBall);