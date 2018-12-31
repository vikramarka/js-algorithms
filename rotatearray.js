function rotateArray(arr, times) {
  var arrayCopy = arr.slice();
  for (var i = 0; i < arr.length; i++) {
    var index = (i + times) % arr.length;
    arr[index] = arrayCopy[i];
  }
  console.log("Original Array: ", arrayCopy);
  console.log("Rotated Array: ", arr);
}
var array = [1, 2, 3, 4];
rotateArray(array, 16);
