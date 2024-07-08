let ar = [1, 5, 6, 7, 8, 9];
let ar1 = [1, 5, 6, 7, 8, 9];
// console.log(ar.at(-3));
// console.log(-1 - 1);
// let ar3 = ar.concat(ar);
// console.log(ar3);

// let insideOut = [1, [2], [3, [[4]]], [5, 6]];
// let result = [];

// for (let i of insideOut) {
//   if (typeof i !== "number") {
//     do {
//       i = i.flat();
//     } while (i.some((item) => typeof item !== "number"));
//   }
//   result.push(i);
// }

// console.log(result);

let insideOut = [1, [2], [3, [[4]]], [5, 6]];
let result = insideOut.flat(Infinity);

console.log(result);