var timerE1 = document.getElementById('countdown');
var startbtn = document.getElementById('start');


//questions with choices and answers
var questions = [ 
    {q:'Commonly Used data types DO Not Include:',
    c:'String', 'booleans','alerts', 'numbers',
    a:'booleans'}

    {q:'The condition in an if/ else statements is enclosed with _______.'
    c:'quotes', 'curly brackets', 'parenthesis', 'square brackets'
    a:'parenthesis'}

    {q:'Arrays in JavaScript can be used to store _______.'
    c:'numbers and strings', 'other arrays','booleans','all of the above'
    a:'all of the above'}

    {q:'String valve must be enclosed within _______ when being assigned to varibles'
    c:'commas','curly brackets','quotes','parenthesis'
    a:'quotes'}

    {q:'A very useful tool used during development and degugging for printing content to the debugger is:'
    c:'JavaScript','terminal/bash','for loops', 'console log'
    a:'console log'}
];

// Track Score

var score = 0

//timer that countsdown from 60

function countdown(){
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerE1.textContent = 'Timer:' + timeLeft;
            
            timeLeft--;
        } else {
            timerE1.textContent = '';

            clearInterval(timeInterval);
            displayMessage();
        }
    },1000);    
    }
}

startBtn.onclick = countdown;
