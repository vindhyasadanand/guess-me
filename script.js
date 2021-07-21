'use strict';


//to select an html element . inorder to select a class
// # inorder to select a class
//console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20; 

let highscore = 0;
const displayMessage  = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess)
    {
       displayMessage('⛔No Number');
    }
    else if(guess==secretNumber)
    {
       
        displayMessage('🎉Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width='30rem';
        
        if(score>highscore)
        {
             highscore = score;
             document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if(guess!=secretNumber)
    {
        if(score>1)
       {
        score--;
        document.querySelector('.score').textContent = score;
    displayMessage(document.querySelector('.message').textContent.value 
    > secretNumber? '📈Too High!':'Too Low📉!');
       }
       else{
        displayMessage('💥You Lost The game!');
        
       }
        

    }
    
    document.querySelector('.again').addEventListener('click',function(){
        score = 20;
         secretNumber = Math.trunc(Math.random()*20)+1;
         displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = ' ';
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.number').textContent = '?';
       
    })
});