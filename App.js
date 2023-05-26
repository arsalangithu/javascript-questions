                    //    -----------------Chapter 21 (Changing Case)------------------//


// 1.Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.

var allLower = userInput.toLowerCase();

// 2.Convert the string represented by x to lower-case and assign the
// result to the same variable.


var x = "Hello World";
x = x.toLowerCase();



// 3.Convert the string represented by y to upper-case and assign the
// result to the same variable.

var y = "Hello World";
y = y.toUpperCase();



// 4.Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

var originalString = "Hello World";
var lowercaseString = originalString.toLowerCase();


// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.

var myArray = ["Hello", "World"];
var lowercaseElement = myArray[0].toLowerCase();

// 6. Display in an alert the upper-case version of the string
// represented by a variable.

var myString = "Hello World";
var uppercaseString = myString.toUpperCase();

alert(uppercaseString);



// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.


var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.substring(1).toLowerCase();

console.log(capitalizedCityName);



                    //    -----------------Chapter 22 TO 25------------------//

// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.

var sameWords = "captain";
var slicedWords = sameWords.slice(1, 3);

console.log(slicedWords);

// 2. The number of characters in the string will be assigned to the
// variable.

var myString = "Hello World";
var characterCount = myString.length;

console.log(characterCount);


// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.

var animal = "elephant";
var seg = animal.slice(2, 6);

console.log(seg);


// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.

var myString = "Hello World";
var characterCount = myString.length;

console.log(characterCount);


// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.

var myString = "Example String";
var characterCount = myString.length;
var slicedString = myString.slice(1, -3);

console.log(characterCount);
console.log(slicedString);

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

3

// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?

16

// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.

var text = "Let it go, let it go, can't hold it back anymore";
var indx = text.lastIndexOf("go");

console.log(indx);

// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.

var myString = "Hello, World";
var indexNum = 6;

if (myString.charAt(indexNum)) {
  // Code to execute if the segment exists
  console.log("Segment exists at index " + indexNum);
} else {
  // Code to execute if the segment does not exist
  console.log("Segment does not exist at index " + indexNum);
}


// 10. In this string "abcde", what character is at index 2? (Use
//     charAt)

var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);

console.log(characterAtIndex2);

// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.


var text = "This is a sample text.";
var cha = text.charAt(9);

console.log(cha);

// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.

var str = "Hello World";
var x = str.charAt(str.length - 1);

console.log(x);


// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.

var input = "Hello, World!";
var cha = input.charAt(4);

console.log(cha);


// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.


var myString = "Hello";
var targetCharacter = "l";

if (myString.charAt(2) === targetCharacter) {
  // Code to execute if the 3rd character is the target character
  console.log("The 3rd character is '" + targetCharacter + "'");
} else {
  // Code to execute if the 3rd character is not the target character
  console.log("The 3rd character is not '" + targetCharacter + "'");
}

// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.

// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.



var str = "Hello";
var arr = [];

for (var i = 0; i < str.length; i++) {
  arr[i] = str.charAt(i);
}

console.log(arr);

var reply = "No, I can't go.";
var revisedReply = reply.replace("no", "yes");

console.log(revisedReply);


// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.

var str = "1 apple, 2 bananas, 3 oranges";
var newStr = str.replace("1", "one");

console.log(newStr);

// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");


var x = "banana";
var y = x.replace(/a/g, "z");

console.log(y);



                   //    -----------------Chapter 26 (Rounding Numbers)------------------//

 // 1. Form a statement that rounds a number to the nearest integer.

 var roundedNumber = Math.round(7.6);


// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

var origNum = 3.8;
var roundNum = Math.ceil(origNum);


// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

var origNum = 5.4;
var roundNum = Math.floor(origNum);


// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.

var originalNumber = 3.14159;
var roundedNumber = Math.round(originalNumber);


// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.    
    
var num = 0.5;
var roundedNum = Math.floor(num);
 
    
    
    
    
                   //    -----------------Chapter 27 (Random Numbers)------------------//
// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50

var randomNum = Math.random(); 
var randomNum = Math.random();
var scaledNum = Math.floor(randomNum * 50) + 1; 
console.log(scaledNum);


// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.
var randomNum = Math.random(); // Generate a random number between 0 and 1
var scaledNum = Math.floor(randomNum * 50) + 1; // Scale and shift the number to the desired range

console.log(scaledNum); // Output: A random number between 1 and 50

// 3. You have to create a dice in JavaScript with the use of pseudo-
// random number.
function rollDice() {
    // Generate a random number between 1 and 6
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  }
  
  // Roll the dice
  var diceRoll = rollDice();
  
  console.log("Dice roll result:", diceRoll);
  
// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number. 
    
function tossCoin() {
    // Generate a random number between 0 and 1
    var randomNum = Math.random();
  
    // Check the random number to determine the outcome
    if (randomNum < 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }
  
  // Perform the coin toss
  var coinTossResult = tossCoin();
  
  console.log("Coin toss result:", coinTossResult);
  
    
                   //    -----------------Chapter 28 TO 29 (Converting Strings)------------------//
    
    
// 1. How do you convert a string to an integer in JavaScript?    
    
var str = "42";
var num = parseInt(str);

console.log(num); // Output: 42

// 2. Write a JavaScript function to convert the string "123" to an
// integer.
    
function convertStringToInteger(str) {
    return parseInt(str);
  }
  
  var str = "123";
  var num = convertStringToInteger(str);
  
  console.log(num); // Output: 123

//   3. How can you convert a string containing a decimal number to a
//   floating-point number in JavaScript?  

    
var str = "3.14";
var num = parseFloat(str);

console.log(num); // Output: 3.14


// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?

function isConvertibleToNumber(str) {
    return !isNaN(str);
  }
  
  var str1 = "42";
  var str2 = "3.14";
  var str3 = "abc";
  
  console.log(isConvertibleToNumber(str1)); // Output: true
  console.log(isConvertibleToNumber(str2)); // Output: true
  console.log(isConvertibleToNumber(str3)); // Output: false
  
// 5. How can you convert a number to a string in JavaScript?

var num = 42;
var str = num.toString();

console.log(str); // Output: "42"
var num = 42;
var str = num + "";

console.log(str); // Output: "42"

// 6. Write a JavaScript function to convert the number 42 to a string.
function convertNumberToString(num) {
    return num.toString();
  }
  
  var number = 42;
  var str = convertNumberToString(number);
  
  console.log(str); // Output: "42"
  

// 7. Can you convert a string representing a decimal number (e.g.,
// "3.14") to an integer in JavaScript? If so, how?
var decimalStr = "3.14";
var integerNum = parseInt(decimalStr);

console.log(integerNum); // Output: 3

var decimalStr = "3.14";
var integerNum = +decimalStr;

console.log(integerNum); // Output: 3

                   //    -----------------Chapter 30 (Controlling the length of decimals)------------------//


// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.

var num = 3.14159;
var decimalPlaces = 2;
var newNum = num.toFixed(decimalPlaces).toString();

console.log(newNum);



//    2. In a single statement round a number represented by a variable to
//    2 places, convert it to a string, convert it back to a number, and
//    assign it to the same variable.


var num = 3.14159;
num = parseFloat(num.toFixed(2));

console.log(num);

// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.

var num = 3.14159;

if (num.toFixed(2).toString().length > 4) {
  console.log("The rounded number has more than 4 characters");
} else {
  console.log("The rounded number has 4 or fewer characters");
}

// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.

var num = 3.14159265359;
var roundedNum = num.toFixed(2).toString();

alert(roundedNum);


// Chapter 31 - 34 (Date & Time)

// Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.
var dateOfBirth = new Date();

// Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.
var dStr = new Date().toString();

// Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.
var day = d.getDay();

// The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
alert(dayNames[d]);

// Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Adding 1 as months are zero-based (0-11)
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var milliseconds = currentDate.getMilliseconds();

// Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.
var later = new Date(2020, 11, 31);

// Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.
var myDate = new Date(1992, 1, 2);

// Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.
alert(new Date('1980-01-01').getTime());

// How do you change the year of a date in JavaScript?
var myate = new Date();
myDate.setFullYear(2022);

// Write a JavaScript function to change the month of a given
// date to January.
var date = new Date();
console.log('Before:', myDate.getMonth());
changeMonthToJanuary(myDate);
console.log('After:', myDate.getMonth());

//What is the method to change the day of the week for a
// specific date in JavaScript?
function changeDayOfWeek(date, desiredDayOfWeek) {
    var currentDayOfWeek = date.getDay();
    var diff = desiredDayOfWeek - currentDayOfWeek;
    var newDate = new Date(date.getTime() + (diff * 24 * 60 * 60 * 1000));
    return newDate;
}

//   Write a JavaScript function to change the minutes of a given
// time to a specific value. (Value by prompt)
function changeMinutesToSpecificValue(date) {
    var minutes = parseInt(prompt("Enter the specific value for minutes:"));
    if (isNaN(minutes)) {
        console.log("Invalid input. Please enter a valid number for minutes.");
        return;
    }

    date.setMinutes(minutes);
    console.log("Updated time:", date);
}

//   Write a JavaScript function to add a specific number of
//   hours to a given time.
function addHoursToDate(date, hoursToAdd) {
    date.setTime(date.getTime() + (hoursToAdd * 60 * 60 * 1000));
    return date;
}

//   You have to create a age calculator in JavaScript.
function calculateAge(birthdate) {
    var today = new Date();
    var birthdateObj = new Date(birthdate);

    var age = today.getFullYear() - birthdateObj.getFullYear();
    var monthDiff = today.getMonth() - birthdateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
        age--;
    }

    return age;
}

//   Chapter 35 - 37 (Functions)
//   Code the first line of a function displayAlert.
function displayAlert() { }

// Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.
var name = askName();
console.log("User name:", name);

// Code a function that calls 2 other functions.
function greetUser() {
    console.log("Hello, welcome!");
}

function displayDate() {
    var currentDate = new Date();
    console.log("Current date is:", currentDate);
}

function callTwoFunctions() {
    greetUser();    // Call the first function
    displayDate();  // Call the second function
}

// Call the function that calls two other functions
callTwoFunctions();

//   Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.
function displayPromptAndAlert() {
    var userName = prompt("Enter name");
    alert("Entered name: " + userName);
}
displayPromptAndAlert();

// Code the first line of a function named concat that has 3
// parameters, the first three varters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.
var myVariable = "Hello";
var myString = "world";
var myNumber = 42;

concat("a", "b", "c", myVariable, myString, myNumber);

// Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.
function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
}

// Example usage:
var string1 = "Hello";
var string2 = "world";

var concatenated = concatenateStrings(string1, string2);
console.log("Concatenated string:", concatenated);


//   Code a function that has three parameters. Multiply them and
//   assign them to a variable that hasn't been declared yet.
function multiplyNumbers(num1, num2, num3) {
    var result = num1 * num2 * num3;
    return result;
}

// Example usage:
var number1 = 2;
var number2 = 3;
var number3 = 4;

var multiplied = multiplyNumbers(number1, number2, number3);
console.log("Multiplied result:", multiplied);

//   Write a JavaScript function that takes an array of numbers as
//   input and returns the average of those numbers.
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
}

//   Write a JavaScript function that takes two parameters and returns
//   their sum.
function calculateSum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var result = calculateSum(number1, number2);
console.log("Sum:", result);


//   Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
}

// Example usage:
var numberArray = [5, 10, 15, 20, 25];
var avg = calculateAverage(numberArray);
console.log("Average:", avg);

//   You have to capture the returned value from a function and
// store it in a variable?
function addNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

// Example usage:
var num1 = 5;
var num2 = 10;

var add = addNumbers(number1, number2);
console.log("Sum:", result);

//   Write a function which tells varter counts of (word).
function countvarters(word) {
    var varterCounts = {};

    // Loop through each character in the word
    for (var i = 0; i < word.length; i++) {
        var letter = word[i];

        // Check if the varter already exists in the varterCounts object
        if (varterCounts[letter]) {
            // If it exists, increment the count by 1
            varterCounts[letter]++;
        } else {
            // If it doesn't exist, set the count to 1
            varterCounts[leter] = 1;
        }
    }

    return letterCounts;
}

// Example usage:
var word = "hello";
var counts = countLetters(word);
console.log("Letter counts:", counts);

//   Write a function to set (year) in date object.
function setYear(date, year) {
    date.setFullYear(year);
}

// Example usage:
var Date = new Date();
console.log("Before setting year:", myDate);

setYear(Date, 2023);
console.log("After setting year:", myDate);

//   Write a function which tells the age of a person who Born on
// (dateOfBirth)
function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has already occurred this year
    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

// Example usage:
var dateOfBirth = "1990-05-15";
var age = calculateAge(dateOfBirth);
console.log("Age:", age);

//   Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false
function checkWordPresence(array, word) {
    return array.includes(word);
}

// Example usage:
var wordArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
var searchWord = 'hassan';

var isPresent = checkWordPresence(wordArray, searchWord);
console.log("Presence:", isPresent);

//   Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)
function repeatLetter(letter, times) {
    return letter.repeat(times);
}

// Example usage:
var letter = 'a';
var repeatedLetter = repeatLetter(letter, 10);
console.log("Repeated Letter:", repeatedLetter);

//   write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()
function reverseArray(arr) {
    return arr.reverse();
}

// Example usage:
var myArray = ['a', 'b', 'c', 'd', 'e'];
var reversedArray = reverseArray(myArray);
console.log("Reversed Array:", reversedArray);

//Chapter 38 (Local vs. Global Variables)
// Write a JavaScript function that demonstrates the usage of a local
// variable.
function calculateSum(a, b) {
   var result = a + b; // Local variable
    console.log("Sum:", result);
  }
  
  calculateSum(5, 10);

//   How can you access a global variable inside a function in
// JavaScript?
var globalVariable = "I am a global variable";

function accessGlobalVariable() {
  console.log(globalVariable);
}

accessGlobalVariable();

// Chapter 39, 40 (Switch Statements)

// Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.
var fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple.");
    break;
  case "banana":
    console.log("It's a banana.");
    break;
  case "orange":
    console.log("It's an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}

// Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.
var cityName = prompt("Enter a city name:");

switch (cityName) {
  case "London":
    alert("You entered London!");
    break;
  case "Paris":
    alert("You entered Paris!");
    break;
  case "New York":
    alert("You entered New York!");
    break;
  default:
    alert("City not recognized!");
}




