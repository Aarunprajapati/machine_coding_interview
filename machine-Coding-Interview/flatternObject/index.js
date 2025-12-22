// function FirstflattenObject(obj, prefix = "") {
//   return Object.keys(obj).reduce((acc, k) => {
//     const prev = prefix.length ? prefix + "." : "";

//     if (typeof obj[k] === "object" && obj[k] !== null && !Array.isArray(obj[k])) {
//       Object.assign(acc, flattenObject(obj[k], prev + k));
//     } else {
//       acc[prev + k] = obj[k];
//     }
//     return acc;
//   }, {});
// }

const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: 4,
  g: { h: [5, 6] },
};

// // output= {
// //     "a": 1,
// //     "b.c": 2,
// //     "b.d.e" : 3,
// //     "f":4,
// //      "g.h": [5,6]
// // }

// const flattened = FirstflattenObject(nestedObject);
// console.log(flattened);

function secondFlatternObject(obj, prefix = "", res = {}) {
  for (let key in obj) {
    const newKey = prefix.length ? `${prefix}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      secondFlatternObject(obj[key], newKey, res);
    }
    else{
        res[newKey] = obj[key]
    }
  }
  return res
}

const flattened = secondFlatternObject(nestedObject);
console.log(flattened);
