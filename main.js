/*
HAD ISSUES WITH PROBLEMS 19 AND 20
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");


// 1. Output each item in the following Array to your console within their own paragraphs:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for (var i = 0; i < livingRoom.length; i++) {
    document.getElementById("q1").innerHTML += "<p>" + livingRoom[i] + "</p>";
};

// 2. Using a loop, log numbers 22-33 within their own paragraphs.

for (i = 22; i < 33; i++) {
    document.getElementById("q2").innerHTML += "<p>" + i + "</p>";
};




// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.

for (i = 75; i < 100; i += 5) {
    document.getElementById("q3").innerHTML += "<p>" + i + "</p>";
};





// 4. Write a while loop that displays paragraphs of "This is how a professional loops." to the HTML page 5 times.

var n = 0
while (n < 5) {
    document.getElementById("q4").innerHTML += "<p> This is how a professional loops. </p>";
    n++
};

// 5. Separately, use both a for loop and while loop to do the same thing.
//     Display in unique paragraphs the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.


for (i = 10; i < 110; i += 25) {
    document.getElementById("q5a").innerHTML += "<p> At home, I have " + i + " cats."
};
var x = 10
while (x < 110) {
    document.getElementById("q5b").innerHTML += "<p> At home, I have " + x + " cats.";
    x += 25;
}


// 6. Given the following Array, display in unique paragraphs'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8]
for (i = 0; i < numArray.length; i++) {
    var num6 = numArray[i];

    if ((num6 % 2 === 0) && (num6 > 10)) {
        document.getElementById("q6").innerHTML += "<p>Even and greater than 10.</p>";
    } else if (num6 % 2 === 0) {
        document.getElementById("q6").innerHTML += "<p> Even. </p>";
    } else {
        document.getElementById("q6").innerHTML += "<p>Odd.</p>";
    }
}

//why does the placement of the first if double statement matter?
//When placed as the esle if statment, it did not work.

// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numThrees = [];
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];
for (i = 0; i < numArray.length; i += 3) {
    numThrees.push(numArray[i]);
}

document.getElementById('q7').innerHTML += '<p>' + numThrees + '</p>';


// 8. Write a loop that outputs the following to unique paragraphs:
// #
// ##
// ###
// ####
// #####
// ######
// #######

var hashTag = '';
for (var i = 0; i < 7; i++) {
    hashTag += '#';

    document.getElementById('q8').innerHTML += '<p>' + hashTag + '</p>'
}

// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

for (i = 0; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        // console.log("FizzBuzz");
        document.getElementById("q9").innerHTML += '<p>FizzBuzz</p>'
    } else if (i % 3 === 0) {
        // console.log("Fizz");
        document.getElementById("q9").innerHTML += '<p>Fizz</p>'
    } else if (i % 5 === 0) {
        document.getElementById("q9").innerHTML += '<p>Buzz</p>'
            // console.log("Buzz");
    }
};

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
var human = prompt("Play rock, paper or scissors? Enter either rock, paper, and scissors to see if you beat the computer");
// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.
var computer = Math.random();
console.log(computer);

// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"

if (computer < .34) {
    computer = "rock";
} else if (computer > .33 && computer < .67) {
    computer = "paper";
} else {
    computer = "scissors";
}
console.log(computer);
// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.
var play = function(computer, human) {
    if (computer === human) {
        window.alert("You tie!")
    } else if (computer === "rock") {
        if (human === "paper") {
            window.alert("You win! Paper beats rock!")
        } else if (human === "scissors") {
            window.alert("You lose. Rock beats scissors. Try again.")
        }
    } else if (computer === "paper") {
        if (human === "scissors") {
            window.alert("You win! Scissors beat paper!")
        } else if (human === "rock") {
            window.alert("You lose. Paper beats rock. Try again.")
        }
    } else if (computer === "scissors") {
        if (human === "rock") {
            window.alert("You win! Rock beats scissors!")
        } else if (human === "paper") {
            window.alert("You lose. Scissors beat paper. Try again.")
        }
    }
    //============================following part not working.  Also tried "else"
    // }else if (human !== "rock" && human !== "paper" && human !== "scissors") {
    //   window.alert("What kind of game are you playing???")
    // }
};

// 14. After comparing, determine who has won; the computer or the human!
// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.







// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.

//=====================================QUESTIONS BELOW WILL NOT PRING TO HTML
var largestNum = [-5, -2, -6, 0, -1]
var greatestNum = largestNum[0]


//OTHER METHOD TO FIND LARGEST NUMBER
// var actualLargest = Math.max.apply(Math, largestNum)
// console.log(actualLargest)

for (i = 0; i < largestNum.length; i++) {
    if (largestNum[i] > greatestNum) {
        greatestNum = largestNum[i]
    }
}
document.getElementById("q16").innerHTML += "The largest of the numbers is: " + greatestNum;
// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
//  var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)



//==============NEED FURTHER EXPLANATION WITH THE ARRAY AND "RESULT"


var coin = Math.floor(Math.random() * 2);
var flip = ["heads", "tails"];
var result = flip[coin];

document.getElementById("q17").innerHTML = "Refer to question 18"
    //  // 18. Use a do/while loop to keep flipping the coin until you get tails.
while (result === "heads") {
    var coin = Math.floor(Math.random() * 2);
    if (coin === 1) {
        result = "heads";
        document.getElementById("q18").innerHTML += "<p>Heads. Try again.</p>";
    } else {
        result = "tails";
        document.getElementById("q18").innerHTML += "<p>Tails!</p>";
    }
};
//==============WHY WOULDN'T THIS WORK
// var coin = Math.round(Math.random());
// var flip = ["heads", "tails"];
// var result = flip[coin];

// while (result === "heads") {
//     var coin = Math.round(Math.random());
//     if (coin === 1) {
//         result = "heads";
//         document.getElementById("q18").innerHTML += "<p>Heads. Try again.</p>";
//     } else {
//       result = "tails";
//         document.getElementById("q18").innerHTML += "<p>Tails! Finally.</p>";
//     }
// }


// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #


//=============CONSOLE.LOG WORKS BUT IT WILL NOT PRINT CORRECTLY MUCH OF THE TIME
var grid = ""
var length = 8;
for (y = 0; y < length; y++) {
    for (x = 0; x < length; x++) {
        if ((x + y) % 2 === 0) {
            grid += " ";
        } else {
            grid += "#";
        }
    }
    grid += "\n"
};
console.log(grid);
document.getElementById("q19").innerHTML = grid;



// // 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// // sso that it works for any size, outputting a grid of the given width and height.


//===============STILL ISN'T WORKING COMPLETELY

var gridWidth = document.getElementById("").value;
var gridLength = document.getElementById("").value;
var grid20 = "";
// document.getElementById("btnGrid").addEventListener("click", function {
//     for (y = 0; y < gridLength; y++) {
//         for (x = 0; x < gridWidth; x++) {
//             if ((x + y) % 2 === 0) {
//                 grid20 += " ";
//             } else {
//                 grid20 += "#";
//             }
//         }
//         grid20 += "\n";
//     };
//     document.getElementById("q20").innerHTML = grid20
// });



/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
