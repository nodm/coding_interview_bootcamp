// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // for (let i = 0; i < arr.length - 1; i += 1) {
  //   for (let j = i + 1; j < arr.length; j += 1) {
  //     if (arr[i] > arr[j]) {
  //       const temp = arr[i];
  //       arr[i] = arr[j];
  //       arr[j] = temp;
  //     }
  //   }
  // }

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < (arr.length - i - 1); j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
