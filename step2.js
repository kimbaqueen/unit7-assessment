// 1) Sum Zero
// Write a function that takes in an array of numbers.
// The function should return True if any two numbers in list sum to 0, and false otherwise.


function addToZero() {
    const numbersArray = [1, 2, 3, -4, -2];

    for (let i = 0; i < numbersArray.length; i++) {
        for (let j = 0; j < numbersArray.length; j++) {
            if (numbersArray[i] + numbersArray[j] === 0) {
                return true;
            };
        };
    };
    return false;
};

console.log("addToZero function:");
console.log(addToZero());
// Runtime is: O(n^2)
// Space Complexity is: O(1) --- because fixed data


// 2) Unique Characters
// Write a function that takes in a single word, as a string.
// It should return True if that word contains only unique characters.
// Return False otherwise.


const hasUniqueChars = (str = "") => {
    for (let i = 0; i < str.length; i++) {
        const elem = str[i];
        if (str.indexOf(elem) !== str.lastIndexOf(elem)) {
            return false;
        };
    };
    return true;
};

console.log("hasUniqueChars function:");
console.log(hasUniqueChars('Winner'));
// Runtime is: O(n)
// Space Complexity is: O(n)

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters 
// of the English alphabet at least once, like 
// “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (string) => {
    let str = string.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) < 0) {
            return false;
        };
    };
    return true;
};

console.log("isPangram function:");
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("I like cats, but not mice"));
// Runtime is: O(n)
// Space Complexity is: O(n)


// 4) Longest Word
// Write a function, find_longest_word, 
// that takes a list of words and returns the length of the longest one.

const findLongestWord = (arr) => {
    let wordArray = ["hi", "hello", "goodbye", "chao", "Mississippi"];

    return wordArray.sort(function (a, b) { return b.length - a.length })[0].length;
};

console.log("findLongestWord function:");
console.log(findLongestWord());
// Runtime is: O(1)
// Space Complexity is: O(1) --- because fixed data
