//Write a function that returns the squares which equal to a given number.
//Example Input: 12
//Desired Output: 3,1,1,1

function getSquares(num) {
  var squares = [];
  var sum = 0;
  var n = num;
  while (n > 0) {
    var squareRoot = Math.floor(Math.sqrt(n));
    squares.push(squareRoot);
    sum += squareRoot * squareRoot;
    n = num - sum;
  }
  return squares;
}

var testNum = 12;
console.log(`Squares of ${testNum} is ${getSquares(testNum)}`);
