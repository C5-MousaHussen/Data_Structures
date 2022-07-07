// --- Directions
// Implement selectionSort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      let answer = arr[i];
      arr[i] = arr[min];
      arr[min] = answer;
    }
  }
  return arr;
};

console.log(selectionSort([7, 20, -3, 4, 5]));

module.exports = { selectionSort };
