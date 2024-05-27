/*
 * Programming Quiz: JuliaJames
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 */
 
let x = 1;

while (x <= 100) {
    // check divisibility
    let jjMessage = "";
    if (x % (5*3) === 0) {
        jjMessage = "Julia James";
    } else if ((x % 5) === 0) {
        jjMessage = "James";
    } else if ((x % 3) === 0) {
        jjMessage = "Julia";
    } else {
        jjMessage = x;
    }
    // print Julia, James, or JuliaJames
    console.log(jjMessage);
    // increment x
    x++;
}