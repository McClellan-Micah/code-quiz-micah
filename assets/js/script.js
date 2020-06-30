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
    answer: 'Document Object Model'},
    
    { question: 'What is JS?',
    choice1: 'JavaScript',
    choice2: 'Cascading Style Sheets',
    choice3: 'HyperText Markup Language',
    choice4: 'Document Object Model',
    answer: 'Javascript'} 
]

var question = document.getElementById("question")
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")

var choices = document.querySelectorAll(".choice")

var i = 0

var startTime = 75;

function myTimer() {
    var timeInterval = setInterval(() => {
        timerEl.textContent = "Time left: " + startTime;
        if (startTime <= 0) {
            timerEl.textContent = "FATALITY"
            timerEl.style.color = "red";
            clearInterval(timeInterval);

            //call endGame();
        }

        // else if(startTime <= 0){
        //     // show end screen
        //     var endScreenEl = document.getElementsByClassName("end-game"); //probably delete whole 'else if' statement
        //     endScreenEl.removeAttribute("class");
        // }

        //Subtracts 1 from the start time
        startTime--;
    }, 1000);
}

function startGame() {
    myTimer(); //call timer
    button.style.display = "none";
    title.style.display = "none";
    intro.style.display = "none";
    //attempt to remove button from initial screen
        // choice1.style.display = ""; 
        // choice2.style.display = "";
        // choice3.style.display = "";
        // choice4.style.display = "";
}

function setQuestion() {
    //use if statement so question only pops up if there are more questions
    if (i < questions.length) {

    //here we are removing the hidden class and setting the text for the question 
    question.textContent = questions[i].question
       //We want to loop through all the questions using questions.length
        for (x=0; x < questions.length; x++) {
            choices[x].classList.remove("hidden");
        }
        //Shows the text content of the current question.
        choice1.textContent = questions[i].choice1;
        choice2.textContent = questions[i].choice2;
        choice3.textContent = questions[i].choice3;
        choice4.textContent = questions[i].choice4;
        
        //Then we want to generate new question when our answer is correct.
        
        //Then we will use a boolean comparator function (call setquestion() again)
        
    } else {
        for (x=0; x < questions.length; x++) {
            choices[x].classList.add("hidden");
        }
    question.textContent = "Finito";
    //call endGame();
    }
}

button.onclick = startGame;

//function compareAnswer() fires any time you press any 4 answer. 
    //when click one it fires and compares text from button blicked to the answer (if statement).
function compareAnswer() { //console log to test if working
    var answers = document.getElementsByClassName("choice");
    //check answer. if right, then move on, else deduct 10 seconds
    var userValue = event.target.value; 
    //console.log(userValue);
    var userAnswer = questions[i] ["choice" + userValue];
    var quizAnswer = questions[i].answer;
    // console.log("userAnswer: " + userAnswer);
    // console.log("quizAnswer: " + quizAnswer);

    var correctAnswer = false;
    if(userAnswer == quizAnswer){
        correctAnswer = true;
    }
    if(correctAnswer){
        console.log("Correct ");
        i++;
        setQuestion();
        
    }
    else{
        console.log("Incorrect -10s");
        startTime = startTime - 10;
    } 
}

function endGame() {
    //when all questions are answered, user is prompted to enter their initials. initials and score are saved to localStorage
    //will call within else statement of setQuestion AND when timer runs out
}

//eventlistener 'Start Quiz'
button.addEventListener("click", setQuestion)

//event listers for each choice button
choice1.addEventListener("click", compareAnswer)
    // choice1.onclick = function() {
    //     console.log("1st Choice clicked");
    // }
choice2.addEventListener("click", compareAnswer)
    // choice2.onclick = function() {
    //     console.log("2nd Choice clicked");
    // }
choice3.addEventListener("click", compareAnswer)
    // choice3.onclick = function() {
    //     console.log("3rd Choice clicked");
    // }
choice4.addEventListener("click", compareAnswer)
    // choice4.onclick = function() {
    //     console.log("4th Choice clicked");
    // }