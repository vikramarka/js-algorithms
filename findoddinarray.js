/**
  Create a function that takes an array and returns odd number in it.
  For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired and it should be returned.

 **/

// function solution(A) {
//   var oddNumber;
//   A.sort();
//   for (var i = 0; i < A.length; i++) {
//     var index = i;
//     var lastIndex = A.lastIndexOf(A[i]);
//     var odd = index == lastIndex;
//     if (odd) {
//       oddNumber = A[i];
//       break;
//     } else {
//       A.splice(i, 1);
//       A.splice(lastIndex - 1, 1);
//       i--;
//     }
//   }
//   return oddNumber;
// }

// function solution(A) {
//   var oddNumber;
//   A.sort();
//   var pairs = [];
//   for (var i = 0; i < A.length-1; i+=2) {
//     var n = A[i];
//     var pairIndex = -1;
//     if (pairIndex > -1) {
//       A.splice(i--, 1);
//       pairs.splice(pairIndex, 1);
//     } else {
//       pairs.push(n);
//     }
//   }
//   return pairs[0];
// }

function solution(A) {
  A.sort();
  for (var i = 0; i < A.length - 1; i += 2) {
    if (A[i] != A[i + 1]) {
      return A[i];
    }
  }
  return A[A.length - 1];
}

var testArray = [];
for (var i = 0; i < 999999; i++) {
  var randomNumber = 1 + Math.round(Math.random() * 100);
  testArray.push(randomNumber);
  testArray.push(randomNumber);
}
testArray.push(1);

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
//should return 7;
console.log(solution(testArray));
//should return 1;
