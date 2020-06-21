//timer function should wrap everything

//declare variables
    //array containing questions and answers
    //choices 1,2,3,4
    //use getElementById() and querySelector()

//write functions
function myTimer() {
    //set variables
    var startTime = 5;
    var myInterval = 3000;
    var timer = document.getElementById("timer");

    //The set interval takes two arguments,  the function and an interval
    var mySet = setInterval( createTimer, myInterval);

    function createTimer() {
        //Keep the interval going IF your startTime is above zero
        if (startTime > 0) {
            timer.textContent = startTime;
    
        //Subtracts 1 from the start time
        startTime = startTime - 1
    
        } else {
        timer.textContent = "FATALITY"

        clearInterval(mySet)
        }
    }
}
    //startGame()
    //setQuestion()

//addEventListeners
    //at least one for the button for startGame when "click"