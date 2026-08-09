const myMap = (array, callback) => {
  const myNewArray = new Array();

  for (let i = 0; i < array.length; i++) {
    const callbackResult = callback(array[i]);
    myNewArray.push(callbackResult);
  }

  return myNewArray;
};

const addedArray = myMap([1, 2, 3], (arrayNum) => arrayNum + 2);

console.log(addedArray);
