//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);
document.getElementById("buttonRes").addEventListener("click", restart);

//When the stop button is pushed
function buttonPressed() {
    pushed = true;
}

function restart() {
    pushed = false;
    spinningElem.innerHTML = "";
    setTargetInt();
    spin();
}
//set the target Int
function setTargetInt() {
    var targetElem = document.getElementById('targetNum');
    targetInt = Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
    for (i = 0; i < 101; i++) {
        if (i === 100) {
            i = 0;
        }
        if (pushed == true) {
            stop(i); //Trigger this function when the STOP button has been pushed
            break;
        } else {
            spinningElem.innerHTML = i;
            await sleep(75) //Paste this wherever you need to sleep the incrimentor 
        }
    }
}

//EDIT THIS FUNCTION
function stop(i) {
    //WRITE YOUR CODE HERE
    var result = document.getElementById('result'); //display your result message here
    var offBy = Math.abs(targetInt - (i - 1));
    var message = "";
    if (offBy == 0) {
        message = "You win!";
    } else {
        message = "You lost! Off by " + offBy;
    }
    result.innerHTML = message;

}
//main
spin();
setTargetInt();