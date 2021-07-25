/*
- Show the user 4 random numbers between 1 and 100 using an alert
- Ask them to enter the numbers in the right order using a prompt
    - Delay the prompt by 15 seconds (so they have time to forget)
- Check how many numbers they entered correctly
- Show the user their result
*/

/*
TODOs:
```1.1 generate random number between two values(use Math.random())
```1.2 create an array of four random numbers between 1 and 100
```1.3 alert generated numbers()

```2.1 use prompt for the question(ask user to enter four numbers separated by spaces)
```2.2 save user input to a variable
```2.3 parse entered input to an array of four numbers
```2.4 delay prompt(use setTimeout())

3. count correct numbers(if they were entered in correct sequence)

4. alert user test result
*/

/* function generates random number between two values, including passed-in values */
function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}

/*  - use generateRandomNumber(), 
    - return an array of 4 generated random numbers between 1 and 100 */
function buildNumberArray() {
  const generatedNumbers = [];

  for (let i = 0; i < 4; i++) {
    generatedNumbers.push(generateRandomNumber(1, 100));
  }
  return generatedNumbers;
}

/* create an alert message using buildNumberArray() */
function createAlertMessage(arr) {
  let message = `***MEMORY TEST***\n\nMemorize these numbers and their order\n\n`;
  let stringOfNumbers = arr.join(`           `);

  message += `${stringOfNumbers}\n\nWhen you are ready, press OK or Enter`;

  return message;
}

function askUserInput() {
  let userInput = prompt(
    `***\n\nPlease enter memorized numbers in their order.\n(Separate them by space)\n\n***`
  );
  return userInput;
}

// use userInput string and parse it to an array of four strings
function parseStringToArray(str) {
  const numbersAsStrings = str.split(` `);

  return numbersAsStrings;
}

function parseIntArray(arr) {
  const numbers = [];

  for (let i = 0; i < arr.length; i++) {
    numbers.push(parseInt(arr[i]));
  }

  return numbers;
}

function checkAnswer(generatedNumbers, userNumbers) {
  let count = 0;
  for (let i = 0; i < generatedNumbers.length; i++) {
    if (generatedNumbers[i] === userNumbers[i]) {
      count += 1;
    }
  }
  return count;
}

setTimeout(() => {
  // save generated numbers array in a variable
  const generatedNumbers = buildNumberArray();
  alert(createAlertMessage(generatedNumbers));

  // ask user to enter the numbers
  let userInput = askUserInput();
  const parsedStringArray = parseStringToArray(userInput);
  // save user input numbers array in a variable
  const userInputNumbers = parseIntArray(parsedStringArray);

  const result = checkAnswer(generatedNumbers, userInputNumbers);

  // console.log("userInputNumbers: ", userInputNumbers);
  const testMessage = alert(
    `You entered correctly ${result} numbers.\n\nYou had to memorize:\n${generatedNumbers}\n\nYou entered:\n${userInputNumbers}`
  );
}, 1500);
