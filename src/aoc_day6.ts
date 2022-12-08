export const x = "";

const subroutine = await Deno.readTextFile("./input.txt");
const charsArr = subroutine.split("");

const isUnique = (array: Array<string>) => {
  return new Set(array).size === array.length;
};

// ****** Second Part *******
let chars = [];

for (let i = 0; i < charsArr.length; i++) {
  chars.push(charsArr[i]);

  if (chars.length > 14) {
    chars.shift();
  }

  if (chars.length === 14 && isUnique(chars)) {
    console.log(i + 1);
    break;
  }
}

// ****** Second Part *******
//
//
//
//
// ****** First Part *******

// let chars = [];

// for (let i = 0; i < charsArr.length; i++) {
//   chars.push(charsArr[i]);

//   if (chars.length > 4) {
//     chars.shift();
//   }

//   if (chars.length === 4 && isUnique(chars)) {
//     console.log(i + 1);
//     break;
//   }
// }

// ****** First Part *******
