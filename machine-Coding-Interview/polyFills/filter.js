// Array.filter(Number, i , arr)

Array.prototype.customFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];



const newArr = arr.customFilter((num) => num % 2 === 0);
console.log(newArr);
