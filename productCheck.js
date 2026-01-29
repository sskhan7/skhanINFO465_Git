// productCheck.js
// This program accepts integers from the user until 'q' is entered.
// It checks whether the product of any two integers equals a third.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

// Check if any two numbers multiply to another number
function checkCondition(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i !== k && j !== k) {
          if (arr[i] * arr[j] === arr[k]) {
            console.log(
              `Condition is met: ${arr[i]} x ${arr[j]} = ${arr[k]}`
            );
            return;
          }
        }
      }
    }
  }
  console.log("Condition was not met");
}

// Prompt user
function ask() {
  rl.question("Enter an integer (or 'q' to quit): ", input => {
    if (input.toLowerCase() === "q") {
      if (numbers.length < 3) {
        console.log("Not enough integers entered.");
      } else {
        checkCondition(numbers);
      }
      rl.close();
      return;
    }

    let value = Number(input);

    if (!Number.isInteger(value)) {
      console.log("Error: Please enter an integer or 'q'.");
    } else {
      numbers.push(value);
      console.log("You entered:", value);
    }

    ask();
  });
}

ask();
