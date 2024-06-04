// ---------------------------------------------------------------------------------
// Functions
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------
// Reversing a string
function reverseString(reverseMe) {
  let reversed = "";
  for (let i = reverseMe.length - 1; i >= 0; i--) {
      reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("Julia"));

// ---------------------------------------------------------------------------------
// Annotated Function
// Set one parameter to hold the value of the input string 
function reverseString(reverseMe) { 

  // Declare a variable with an empty string to store the reversed string 
  let reversed = ""; 
  
  // Loop through the `reverseMe` string from back to front 
  for (let i = reverseMe.length - 1; i >= 0; i--) { 
    
    // Add each character to the end of `reversed` 
    reversed += reverseMe[i]; 
  } 
  return reversed;
}

// Return the completed string when the loop is complete return reversed; }
console.log(reverseString("Julia"));  
// ---------------------------------------------------------------------------------
/**
 * This functions determines if a numbe is prime by trying to divide
 * the integer by numbers less than itself
 * @param {number} integer 
 * @returns true or false
 */
function isPrime(integer) {
  for (let x = 2; x < integer; x++ ) {
      if(integer % x === 0) {
          console.log(integer + " is divisible by " + x);
          return false
      }
  }

  return true
}
// ---------------------------------------------------------------------------------
isPrime(11);
isPrime(49);
isPrime(902010209);

// ---------------------------------------------------------------------------------
// <-- 4. JavaScript engine looks here last
const globalVar = "I am in the global scope";

function outerOuterFunction() {
  // <-- 3. JavaScript engine looks here third
  const outerOuterVar = 'I am in the outerOuterFunction scope';
  function outerFunction() {
    // <-- 2. JavaScript engine looks here second
    const outerVar = 'I am in the outerFunction scope';
    function innerFunction() {
      // <-- 1. JavaScript engine looks here first
      const innerVar = 'I am in the innerFunction scope';
      console.log(globarVar);
    }
  }
}