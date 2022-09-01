const quickSort = (myArr, startIndex, endIndex) => {
  let index;
  //check length of array
  if (startIndex < endIndex) {
    // set the index to a number in the middle of the array
    index = partition(myArr, startIndex, endIndex);
    // create and sort left sub-array
    quickSort(myArr, startIndex, index);
    // create and sort right sub-array
    quickSort(myArr, index + 1, endIndex);
  }
};

const partition = (myArr, startIndex, endIndex) => {
  index = Math.floor((startIndex + endIndex) / 2);
  pivot = myArr[index];

  while (true) {
    // start at the first index of the sub-array and increment
    // increment until value is greater than pivot
    while (myArr[startIndex] < pivot) startIndex++;

    // start at the last index of the sub-array and increment
    // increment backwards until value is less than pivot
    while (myArr[endIndex] > pivot) endIndex--;

    if (startIndex >= endIndex) return endIndex;

    // swap values at startIndex and endIndex
    let temp = myArr[startIndex];
    myArr[startIndex] = myArr[endIndex];
    myArr[endIndex] = temp;
  }
};
let myArr = [6, 1, 9, 2, 8, 3, 7, 4, 5];
quickSort(myArr, 0, myArr.length - 1);
console.log(myArr);
