
// Hello World test case
console.log(`You sum is ${40 + 8+ 23-10}`)


// ASSIGNMENT ONE
// Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country and Log their values to the console.

let country = "Canada";
let continent = "North America";
let population = 39858480;

console.log(country +" "+ continent+" "+ population);

// --------------------------------------------------------------


// ASSIGNMENT TWO & THREE
// Declare a variable called'isIsland'and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet.Then Log the types of'isIsland','population','country'and'language' to the console

const isCanada = true;
let language;
language = "English";

console.log(typeof isCanada, typeof population, typeof country,typeof language);

// --------------------------------------------------------------

// BASIC OPERATORS
let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log("x is: " + x)


// ASSIGNMENT FOUR - BASIC OPERATION
// 1. If your country split in half,and each half would contain half the population, then how many people would live in each half?
let halfPopulation = population / 2
console.log(halfPopulation);

// 2. Increase the population of your country by 1 and log the result to the console
population ++;
console.log(population);

// 3. Finland has a population of 6 million. Does your country have more people than Finland?
const finlandPopulation = 6000000;
if (finlandPopulation < population) {
  console.log("Yes, Canada has a larger population than Finland");
} else {
  console.log("Finland's population is larger than my Country");
}

// 4. The average population of a country is 33 million people.Does your country have less people than the average country?
const averagePopulation = 33000000;
if (population >= averagePopulation) {
  console.log(`${country} has a population lager than 33 million`);
} else {
  console.log(`${country} does not have a population larger than 33 million.`)
}

// 5. Based on the variables you created create a new variable'description'which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
let description = `${country} is in ${continent}, and it's ${population} people speak ${language}`
console.log(description)

// --------------------------------------------------------------

// CODING CHALLENGE ONE
// BMI = mass / height ** 2 [BMI = mass / (height * height)]
let BMIMark, BMIJohn;

const massMark = 78
const heightMark = 1.69

const massJohn = 92
const heightJohn = 1.95

BMIMark = massMark / (heightMark * heightMark)
BMIJohn = massJohn / (heightJohn * heightJohn)
console.log("Mark's BMI" +" "+ BMIMark, "& John's BMI" +" "+ BMIJohn)

// let markHigherBMI

// if (BMIMark > BMIJohn) {
//   markHigherBMI = true;
//   console.log(`Mark's BMI is higher than John's`)
// } else {
//   console.log(`Mark's BMI is lower than John's`)
// }

let markHigherBMI = BMIMark > BMIJohn
console.log(`Mark has higher BMI than John: ${markHigherBMI}`) 

// --------------------------------------------------------------


// CODING CHALLENGE THREE
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

let scoreDolphinsOne = 96;
let scoreDolphinsTwo = 108;
let scoreDolphinsThree = 89;

let scoreKoalasOne = 88;
let scoreKoalasTwo = 91;
let scoreKoalasThree = 110;

let scoreDolphins = (scoreDolphinsOne + scoreDolphinsTwo + scoreDolphinsThree) / 3

let scoreKoalas = (scoreKoalasOne + scoreKoalasTwo + scoreKoalasThree) / 3

console.log(`Dolphins average score: ${scoreDolphins}`)
console.log(`Koalas average score: ${scoreKoalas}`)

if (scoreDolphins === scoreKoalas) {
  console.log(`Both win the trophy`);
} else if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy`);
} else if (scoreDolphins < scoreKoalas) {
  console.log(` Koalas win the trophy`)
}

// JavaScript SWITCH STATEMENTS

// let userDay = prompt('What day is it? (lowercase letters only)')
let day = 'saturday';

// if (day == '') {
//   day = false
//     while (day == '') {
//       prompt('What day is it? (lowercase letters only)')
//       console.log(typeof day);
//       console.log(day);
//     }
// } else {
//   day = true 
//   console.log(day);
// }

switch (day) {
  case 'monday': //day === 'monday'
    console.log('Plan your week!');
    console.log('Starting coding tutorial...');
    break;
  case 'tuesday':
    console.log('Practice coding...');
    break;
  case 'wednesday':
  case 'thursday':
  case 'friday':
    console.log('Code more shit...!');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend with some Photography!! 📸');
    break;
    default: 
      console.log('Not a valid day');
}


// CODING CHALLENGE FOUR
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// 1. Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)