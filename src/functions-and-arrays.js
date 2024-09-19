// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "Invalid input";
  return Math.max(num1, num2);
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  // Check if the array is empty
  if (words.length === 0) {
    return null;
  }

  // Initialize the longest word with the first word in the array
  let longestWord = words[0];

  // Loop through the array starting from the second word
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]; // Update if current word is longer
    }
  }

  return longestWord; // Return the first longest word found
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((acc, currentValue) => acc + currentValue, 0);
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) {
    return 0;
  }

  const average = sumNumbers(array) / array.length;
  return average;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array, word) {
  if (array.length === 0) {
    return null;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return true;
    }
  }
  return false;
}

const test = doesWordExist(words2, "matter");
console.log(test);
