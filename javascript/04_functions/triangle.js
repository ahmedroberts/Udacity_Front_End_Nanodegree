// Build a Triangle, King King

//-------------------------------------------------------
function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
//-------------------------------------------------------
console.log(makeLine(10));
console.log(makeLine(6));

//-------------------------------------------------------