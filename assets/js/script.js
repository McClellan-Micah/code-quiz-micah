var timerEl = document.getElementById("timer")
var button = document.getElementById("startButton")

var intro = document.getElementById("intro")
var title = document.getElementById("title")
//var choice = document.getElementById("choice")

var questions = [
    { question: 'What is HTML?',
    choice1: 'JavaScript',
    choice2: 'Document Object Model',
    choice3: 'HyperText Markup Language',
    choice4: 'Cascading Style Sheets',
    answer: 'HyperText Markup Language'},

    { question: 'What is CSS?',
    choice1: 'JavaScript',
    choice2: 'Cascading Style Sheets',
    choice3: 'HyperText Markup Language',
    choice4: 'Document Object Model',
    answer: 'Cascading Style Sheets'},

    { question: 'What is DOM?',
    choice1: 'JavaScript',
    choice2: 'Cascading Style Sheets',
    choice3: 'HyperText Markup Language',
    choice4: 'Document Object Model',
    answer: 'Document Object Model'} // compare to the string OR the value of the button
]

var question = document.getElementById("question")
// var choice1 = document.getElementById("choice1")
// var choice2 = document.getElementById("choice2")
// var choice3 = document.getElementById("choice3")
// var choice4 = document.getElementById("choice4")

var choices = document.querySelectorAll(".choice")

var i = 0

var startTime = 75;

//write functions
function myTimer() {
    //set variables
    var timeInterval = setInterval(() => {
        timerEl.textContent = "Time left: " + startTime;
        if (startTime === 0) {
            timerEl.textContent = "FATALITY"
            timerEl.style.color = "red";
            clearInterval(timeInterval);
        }
        //Subtracts 1 from the start time
        startTime--;
    }, 1000);
}

function startGame() {
    //call timer
    myTimer();
    button.style.display = "none";
    title.style.display = "none";
    intro.style.display = "none";
    // choice1.style.display = "block"; 
    // choice2.style.display = "block";
    // choice3.style.display = "block";
    // choice4.style.display = "block";

    function setQuestion() {
    
        //use if statement so question only pops up if there are more questions
        if (i < questions.length) {
    
        //here we are removing the hidden class and setting the text for the question 
        question.textContent = questions[i].question
            for (x=0; x < 4; x++) {
                choices[x].classList.remove("hidden");
            }
            
            choice1.textContent = questions[i].choice1;
            choice2.textContent = questions[i].choice2;
            choice3.textContent = questions[i].choice3;
            choice4.textContent = questions[i].choice4;

            i++
        } else {
            for (x=0; x < 4; x++) {
                choices[x].classList.add("hidden");
            }
        question.textContent = "Finito";
        }
    }
    setQuestion();
    button.onclick = startGame;

    //function compareAnswer() fires any time you press any 4 answer. 
    //when click one it fires and compares text from button blicked to the answer (if statement).
    var answers = document.getElementsByClassName("choice");
    for (let k = 0; k < answers.length; k++) {
        answers[k].addEventListener("click", function() {
            //check answer. if right, then move on, else deduct 10 seconds
            var userValue = event.target.value 
            var answer = questions[i].answer;
            if (userValue == answer) {
                setQuestion();
                //add to user score
            } else {
                startTime = startTime - 10;
            }
        });
    }
}

//event listeners
button.addEventListener("click", startGame)
//event listers for each choice button
button.addEventListener("click", choice1)
button.addEventListener("click", choice2)
button.addEventListener("click", choice3)
button.addEventListener("click", choice4)
