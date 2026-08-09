const myForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// You would call it like this:
const myArry = [2, 3, 4, 2];

const printItemPlusTwo = (item) => console.log(item + 2);

myForEach(myArry, printItemPlusTwo);
