/*
 * Programming Quiz: Musical Groups
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */
 
// change the value of `musicians` to test your conditional statements
const musicians = 3;

// your code goes here
let output;

if(0 == musicians){
  output = "not a group";
} else if(1 == musicians) {
  output = "solo";
} else if(2 == musicians) {
  output = "duet";
} else if(3 == musicians) {
  output = "trio";
} else if(4 == musicians) {
  output = "quartet";
} else if(4 < musicians) {
  output = "this is a large group";
} else {
  output = "please enter an positive whole number";
}

console.log(output);