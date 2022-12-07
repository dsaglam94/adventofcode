export const x = "";

const moves = await Deno.readTextFile("./moves.txt");

const crates = [
  ["B", "S", "J", "Z", "V", "D", "G"],
  ["P", "V", "G", "M", "S", "Z"],
  ["F", "Q", "T", "W", "S", "B", "L", "C"],
  ["Q", "V", "R", "M", "W", "G", "J", "H"],
  ["D", "M", "F", "N", "S", "L", "C"],
  ["D", "C", "G", "R"],
  ["Q", "S", "D", "J", "R", "T", "G", "H"],
  ["V", "F", "P"],
  ["J", "T", "S", "R", "D"],
];

const cratesEx = [["N", "Z"], ["D", "C", "M"], ["P"]];

// ****** Second Part *******
const obj = moves.split("\n").map((item) => {
  const itemArr = item.split(" ");
  return { qty: itemArr[1], from: itemArr[3], to: itemArr[5] };
});

for (const inst of obj) {
  // get the crate to add to the new arr
  const crate = crates[+inst.from - 1].slice(0, +inst.qty);
  // remove crate amount equal to qty
  for (let i = 0; i < +inst.qty; i++) {
    crates[+inst.from - 1].shift();
  }
  // add the crate to new arr
  crates[+inst.to - 1].unshift(...crate);
}

console.log(crates.map((item) => item[0]).join(""));

// ****** Second Part *******
//
//
//
//
// ****** First Part *******

// const obj = moves.split("\n").map((item) => {
//   const itemArr = item.split(" ");
//   return { qty: itemArr[1], from: itemArr[3], to: itemArr[5] };
// });

// for (const inst of obj) {
//   // get the crate to add to the new arr
//   const crate = crates[+inst.from - 1].slice(0, +inst.qty).reverse();
//   // remove crate amount equal to qty
//   for (let i = 0; i < +inst.qty; i++) {
//     crates[+inst.from - 1].shift();
//   }
//   // add the crate to new arr
//   crates[+inst.to - 1].unshift(...crate);
// }

// console.log(crates.map((item) => item[0]).join(""));

// ****** First Part *******
