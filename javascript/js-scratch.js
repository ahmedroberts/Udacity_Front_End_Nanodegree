/* Ahmed Omar Roberts, The 9th Raikage
 * 2024.05.20
 * JavaScript practice 
 */

// Do I purchase the hammer 
const price2 = 15.00;
const money2 = 20.00;

if (money2 >= price2) {
  console.log('buy the hammer');
} else {
  console.log('do not buy the hammer');
}

// ----------------------------------------------------------
const a = 1;
const b = 2;

if (a >= b)
  console.log("a is greater than b");
else
console.log("a is less than or equal to b"); 

/*
if (a >= b)
  console.log("a is greater than b");
a = a + 2;
else
console.log("a is less than or equal to b");
*/

// ----------------------------------------------------------
const money = 100.50;
const price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money == price) {
  console.log("You paid the exact amount, have a nice day!");
} else{
  console.log("That's not enough, you still owe money.");
}

// ----------------------------------------------------------
// else if
const runner = "Kendyll";
const position = 2;
let medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");
// ----------------------------------------------------------
// logical operators
var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") {
  console.log("go to the park");
}

// ----------------------------------------------------------
const isGoing = true;
/*
let color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}
*/
const color = isGoing ? "purple" : "orange";
console.log('\n\t'+ color + '\n');

// ----------------------------------------------------------
let x = 4; 
let y = 3; 
const equation = (x + y) > 6 ? 2*x : 2*y ;
console.log(equation);