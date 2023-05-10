// #### Episode 1

// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// EPISODE 1 - ANSWER:
// - The murderer is Miss Scarlet

// - const is used as a constant variable, it means once assigned, it cannot be re-assigned 
// - The scope is global level scope as declareMurder can be called globally as const is used
// - scenario is another variable that's part of the global scope
// verdict is a variable that is storing declareMurderer function which is global
// dot notation is used to go into the scenario dictionary and grabbing murderer
// template literals are used to combine strings with other code, ${} is used for the other code and it's surrounded by back ticks

// #### Episode 2

// ```js

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// EPISODE 2 - ANSWER:
// There will be an error that appears
// - const is a constant variable but it looks like they've tried to re-assign it
// - attempted to reassign murderer but won't work

// #### Episode 3

// ```js
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// ```

// EPISODE 3 - ANSWER:
// First Verdict: The murderer is Mrs. Peacock.
// Second Verdict: The murderer is Professor Plum.
// the variable murderer is created twice but in different types of scopes
// once in global but the other time it's scope level I think
// the first time it's global, the second time it's local


// #### Episode 4

// ```js
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// ```

// EPISODE 4 - ANSWER:
// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// Suspect three is Mrs. Peacock.

// there are a couple of issues I think
// declareAllSuspects has been defined using const but for that you can only assign a variable once
// suspectThree local scope using let

// #### Episode 5

// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// ```
// EPISODE 5 - ANSWER:

// The weapon is Revolver.
// the changeWeapon function changes the value of the weapon property of sceneario. When changeWeapon('Revolver') is called, it changes the value of scenario.weapon to 'Revolver'.
// declareWeapon func returns a string

// #### Episode 6

// ```js
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ```

// EPISODE 6 - ANSWER:

// The murderer is Mrs. White.
// plotTwist function makes murderer assigned to 'Mrs. White'. Since plotTwist is called inside changeMurderer, it has access to the same murderer variable in the global scope, so the value is 'Mrs. White'

// #### Episode 7

// ```js
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ```

// EPISODE 7 - ANSWER:
// The murderer is Mr Green.


// #### Episode 8

// ```js
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// EPISODE 8 - ANSWER:
// The weapon is candle stick.

// #### Episode 9

// ```js
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// ```

// EPISODE 9 - ANSWER:

// The murderer is Professor Plum.

// #### Episode 10 - extension









