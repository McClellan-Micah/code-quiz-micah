//timer function should wrap everything

//declare variables
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

//use getElementById() and querySelector()
var question = document.getElementById("question")
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")

var choices = document.querySelectorAll(".choice")

var i = 0

    
//write functions
function startGame() {
    button.style.display = "none";

    setInterval(setQuestion, 3000);

    function setQuestion() {
    
        //use if statement so question only pops up if there are mroe questions
        if (i < questions.length) {
    
        //This could use with a loop to make it DRY-er!
        //but here we are removig the hidden  class and setting
        //the text for the question 
        question.textContent = questions[i].question
            for (x=0; x < 4; x++) {
                choices[x].classList.remove("hidden")
            }
       
            choice1.textContent = questions[i].choice1
            choice2.textContent = questions[i].choice2
            choice3.textContent = questions[i].choice3
            choice4.textContent = questions[i].choice4

        //if there is a wrong answer you are going to take variable for timer like startTimer
        //then you are going to subtract from startTimer.

            i++
        } else {
            for (x=0; x < 4; x++) {
                choices[x].classList.add("hidden")
            }
        question.textContent = "Finito"
        }
    }
}

    //setQuestion()

//addEventListeners
var button = document.getElementById("startbutton");

button.addEventListener("click", startGame)