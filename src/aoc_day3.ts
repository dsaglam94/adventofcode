export const x = "";

const input = await Deno.readTextFile("./inputCopy.txt");
const inputArr = input.split("\n");

// ****** Second Part *******

const items: Array<string[]> = [];

// groups
for (let i = 0; i < inputArr.length; i += 3) {
  const triplets = [inputArr[i], inputArr[i + 1], inputArr[i + 2]];
  items.push(triplets);
}

console.log(items);

// ****** Second Part *******
//
//
//
//
// ****** First Part *******

// const items: Array<string> = [];

// inputArr.forEach((item) => {
//   const l = item.length / 2;
//   const leftComp = item.substring(0, l);
//   const rightComp = item.substring(l);

//   for (let i = 0; i < leftComp.length; i++) {
//     if (leftComp.indexOf(rightComp[i]) !== -1) {
//       items.push(rightComp[i]);
//       break;
//     }
//   }
// });

// const strItems = items.join("");

// let sum = 0;

// for (let i = 0; i < strItems.length; i++) {
//   const code = strItems.charCodeAt(i);

//   // if true we have an uppercase
//   if (code > 64 && code < 91) {
//     sum += code - 64 + 26;
//   } else {
//     sum += code - 96;
//   }
// }

// console.log(sum)

// ****** First Part *******
