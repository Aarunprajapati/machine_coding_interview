// Map Polyfills
// Array.map(num, i, arr)

Array.prototype.customMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const newArr = arr.customMap((num) => num * 3);
console.log(newArr)


