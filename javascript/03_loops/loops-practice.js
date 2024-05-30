/*
Ahmed The 9th Raikage 
Loops in JavaScript
*/

/* While Loops */
// let x = 1; while (x <= 10000) { console.log(x + " mississippi!"); x = x + 1; }
let x = 1; while (x <= 9) { console.log(x + " mississippi!"); x = x + 1; } // loop to 9

/* For Loops
for ( start; stop; step ) {               //  Start - Stop - Step  <<<<<
  // do this thing
}
*/

for (let i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}

// Nested Loops
for (let x = 0; x < 3; x = x + 1) {
  for (let y = 0; y < 2; y = y + 1) {
      console.log(x + ", " + y);
  }
}

x = 5;
x++;
console.log(x); // 6
x+=9;
console.log(x); // 15
x/=3;
console.log(3); // 5
x*=2;
console.log(x); // 10
x-=9;
console.log(x); // 1
x--;
console.log(x); // 0