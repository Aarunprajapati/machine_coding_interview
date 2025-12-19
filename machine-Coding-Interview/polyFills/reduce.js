Array.prototype.customReduce = function (cb) {
  let acc = 0;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];



const newArr = arr.customReduce((acc, num) => acc + num);
console.log(newArr);
