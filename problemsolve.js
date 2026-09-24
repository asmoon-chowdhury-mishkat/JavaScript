//(1) Example format to follow for every task: Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.
// Input: a number
// Output: "Hot", "Cold", or "Normal"
// Returns: a string

function checkTemperature(temp) {
    if(temp >= 30) {
        return "Hot";
    } else if(temp <= 15) {
        return "Cold";
    } else {
        return "Normal";
    }
}
// console.log(checkTemperature(35));
// console.log(checkTemperature(15));
// console.log(checkTemperature(20));

//(2) Example format to follow for every task: Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)
// Input: 1234
// Output: the number with digits reversed
// Returns: 4321

function reverseNumber(num) {
    let str = num.toString();
    let reversedNum = "";
    for (let i = str.length - 1; i >= 0; i--){
        let letter = str[i];
        reversedNum += letter;
    }
    return Number(reversedNum);
}
// console.log(reverseNumber(1234));
// console.log(reverseNumber(7));

function ultaNumber(num){
    let str =num.toString();
    let reverseDig = "";
    for(let i = str.length - 1; i >= 0; i--) {
        let letter = str[i];
        reverseDig += letter;
    }
    return Number(reverseDig);
}
// console.log(ultaNumber(123456789));
// console.log(ultaNumber(123456789));
// console.log(ultaNumber(true));
// console.log(ultaNumber("chocolate"));

//(3) Example format to follow for every task: Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits.
// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
    let str = num.toString();
    let total = 1;
    for(let i = 0; i < str.length; i++) {  
        let storeI = Number(str[i]);
        total = total * storeI;
    }
    return total;
}
// console.log(productOfDigits(123));
// console.log(productOfDigits(4040));
// console.log(productOfDigits(2342));

//(4) Example format to follow for every task: Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).
// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array

function getOddNumbers(n) {
    let odds = [];
    for(let i = 1; i <= n; i++) {
        // console.log("i -->", i)
        if(i % 2 === 1) {
            odds.push(i)
        }
    }
    return odds;
}
// console.log(getOddNumbers(10));
// console.log(getOddNumbers(15));

//(5) Example format to follow for every task: Write a function countVowels that takes a string and returns how many vowels it contains. Assume the string only contains lowercase letters, no spaces.
// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number

function countVowels(str){
    let vowels = "aeiou";
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        let letter = str[i];
        if(vowels.includes(letter)){
            count ++;
        }
    }
    return count;
}
// console.log(countVowels("javascript"));
// console.log(countVowels("sundarbanoshadharonektibon"));
// console.log(countVowels("sonarbangladesh"));

//(6) Example format to follow for every task: Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.
// Input: a string
// Output: the string without its first and last character
// Returns: a string

function removeFirstAndLast(str) {
    let splitText = str.slice(1, str.length -1)
    return splitText;
}
// console.log(removeFirstAndLast("hello"));
// console.log(removeFirstAndLast("sundarban"));
// console.log(removeFirstAndLast("bangladesh"));

//(6) Example format to follow for every task: Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces.
// Input: a string
// Output: true or false
// Returns: a boolean

function isPalindrome(str) {
    let reversedPalindromeWord = "";
    for(let i = str.length -1; i >= 0; i--) {
        let letter = str[i];
        reversedPalindromeWord += letter;
    }
    if(str === reversedPalindromeWord) {
        return true;
    } else{
        return false
    }
}
// console.log(isPalindrome("level")); // Expected: true
// console.log(isPalindrome("hello")); // Expected: false

//(7) Example format to follow for every task: Write a function findShortestWord that takes a sentence and returns the shortest word in it.
// Input: a sentence (string)
// Output: the shortest word
// Returns: a string

function findShortestWord(sentence) {
    let text = sentence.split(" ");
    let shortestWord = text[0];
    for(let i = 0; i < text.length; i++) {
        let letter = text[i];
        if(shortestWord.length > letter.length) {
           shortestWord = letter;
        }
    }
    return shortestWord;
}
// console.log(findShortestWord("JavaScript is a fun language to learn"));
// console.log(findShortestWord("An orange bited for joyu"));

//(8) Example format to follow for every task: Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value.
// // Input: an array of numbers
// Output: the second smallest number
// Returns: a number


function findSecondSmallest(numbers) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for(let i = 0; i < numbers.length; i++){
        console.log("i-->", numbers[i]);
        if(numbers[i] < smallest ) {    
            secondSmallest = smallest;
            smallest = numbers[i];
        } 
        else if(numbers[i] > smallest && numbers[i] < secondSmallest){
                secondSmallest = numbers[i];
            }
    }

    return secondSmallest;
}
console.log(findSecondSmallest([10, 5, 8, 20, 15]));
console.log(findSecondSmallest([27, 55, 84, 20, 24]));
console.log(findSecondSmallest([15, 20, 25, 30, 35]));
