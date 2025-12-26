Array.prototype.customReduce = function (cb, initial) {
  let acc = initial || 0;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

// Array.prototype.myMap = function(cb){
//   let result = [];
//   for(let i = 0; i < this.length; i++){
//     result.push(cb(this[i], i, this))
//   }
//   return result
// }

// Array.prototype.myFilter = function (cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const newArr = arr.customReduce((acc, curr) => acc + curr);
console.log(newArr);
