// // Array.filter(Number, i , arr)

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

const arr1 = [10, 5, 8, 20];
let max = 0;  //10,20
let second = 0; // 0 5 8 10

for (let n of arr1) {
  if (n > max) {
    second = max;
    max = n;
  } else if (n > second && max !== n) {
    second = n
  }
}


console.log(second)