'user strict';
var count = 0;
var userName = prompt("Enter Your name plz");
alert("lets dicover somethig about me " + userName + "!");
function question1() {
var dogsAns = prompt("Do you think I love dogs? answer with y/n").toLowerCase();
if (dogsAns == 'y' || dogsAns == 'yes') {

    alert("Your answer is incorrect");
}
else if (dogsAns == 'no' || dogsAns == 'n') {
    alert("Your answer is correct");
    count++;
}
else {
    alert("just enter y/n only!");
}
}
question1();
function question2 (){
var scooolAns = prompt("have ever I been suspendeded at school ?\n answer with y/n ").toLowerCase();
if (scooolAns == 'y' || scooolAns == 'yes') {
    alert("Your answer is incorrect");

}
else if (scooolAns == 'no' || scooolAns == 'n') {
    alert("Your answer is correct");
    count++;
}
else {
    alert("just enter y/n please!")
}
}


var loonlyAns = prompt("Do i hate Summer? \n answer with y/n").toLowerCase();
if (loonlyAns == 'y' || loonlyAns == 'yes') {
    alert("Your answer is correct");
    count++;

}
else if (loonlyAns == 'no' || loonlyAns == 'n') {
    alert("Your answer is incorrect");
}
else {
    alert("just enter y/n please!")
}



var footballAns = prompt("Do I like watching football  \n answer with y/n").toLowerCase();
if (footballAns == 'y' || footballAns == 'yes') {
    alert("Your answer is incorrect");

}
else if (footballAns == 'no' || footballAns == 'n') {
    alert("Your answer is correct");
    count++;
}
else {
    alert("just enter y/n please!")
}



var musicAns = prompt("Do I love music?  \n answer with y/n").toLowerCase();
if (musicAns == 'y' || musicAns == 'yes') {
  alert("Your answer is incorrect");

}
else if (musicAns == 'no' || musicAns == 'n') {
    alert("Your answer is correct");
    count++;
}
else {
    alert("just enter y/n please!")
}



alert("Let us play a guessing game!");
var guessNum;
var i = 0;

while (guessNum != 2 && i < 4) {

    guessNum = parseInt(prompt(" How many brothers do You think I have? "));
    if (guessNum > 2 && guessNum != 3) {
        alert("Too high");
        if (i == 3) {
            alert("The correct anwer is 2 :$");
        }
    }
    else if (guessNum == 1 || guessNum == 3) {
        alert("u are too close");
        if (i == 3) {
            alert("The correct anwer is 2 :$");
        }

    }
    else if (guessNum < 2 && guessNum != 1) {
        alert("too low!");
        if (i == 3) {
            alert("The correct anwer is 2 :$");
        }
    }
    else if (guessNum == 2) {
        alert("Correct!");
        count++;

        break;
    }

    i++;

}

var poets = ['الرافعي', 'المتنبي', 'قيس', 'عنترة', 'جرير', 'الفرزدق', 'المعري'];
var guesspoem = prompt(" whom do you think is the arbic poet i like reading his poetry? \n (answer in Arabic please)");

for (var y = 0; y < 6; y++) {
    if (guesspoem == poets[0] || guesspoem == poets[1] || guesspoem == poets[2] || guesspoem == poets[3] || guesspoem == poets[4] || guesspoem == poets[5] || guesspoem == poets[6]) {
        alert("Correct! You are a great predictor!");
        count++;
        break;
    }
    else {
        alert("Incorrect answer. Try your best!");
        guesspoem = prompt(" whom do you think is the arbic poet i like reading his poetry? \n (answer in Arabic please)");

    }
}

alert("Those great poets are : " + 'الرافعي , المتنبي , قيس ,عنترة , جرير, الفرزدق, المعري');
alert("Your total of correct answers is: " + count);