// stats.js
// This program reads integers from the user, stores them in an array,
// calculates the mean and median, and displays the results.

// Import readline module for user input
const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

// Function to calculate mean
function calculateMean(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

// Function to calculate median
function calculateMedian(arr) {
  let sorted = [...arr].sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

// Function to prompt user input
function askForNumber() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {

    // Check if user wants to quit
    if (input.toLowerCase() === "q") {
      if (numbers.length === 0) {
        console.log("No numbers entered. Exiting program.");
      } else {
        let mean = calculateMean(numbers);
        let median = calculateMedian(numbers);

        console.log("\nResults:");
        console.log("Numbers:", numbers);
        console.log("Mean:", mean);
        console.log("Median:", median);
      }
      rl.close();
      return;
    }

    // Convert input to number
    let value = Number(input);

    // Error handling for invalid input
    if (!Number.isInteger(value)) {
      console.log("Invalid input. Please enter an integer.");
    } else {
      numbers.push(value);
    }

    // Continue prompting
    askForNumber();
  });
}

// Start the program
askForNumber();
