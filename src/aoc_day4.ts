export const x = "";

const input = await Deno.readTextFile("./input.txt");
const inputArr = input.split("\n");

// ****** Second Part *******
let ans = 0;

for (const line of inputArr) {
  const [one, two] = line.split(",");
  const [s1, e1] = one.split("-");
  const [s2, e2] = two.split("-");

  if (!(Number(e1) < Number(s2)) && !(Number(s1) > Number(e2))) {
    ans += 1;
  }
}

// ****** Second Part *******
//
//
//
//
// ****** First Part *******
// let ans = 0;

// for (const line of inputArr) {
//   const [one, two] = line.split(",");
//   const [s1, e1] = one.split("-");
//   const [s2, e2] = two.split("-");

//   if (
//     (Number(s1) <= Number(s2) && Number(e2) <= Number(e1)) ||
//     (Number(s2) <= Number(s1) && Number(e1) <= Number(e2))
//   ) {
//     ans += 1;
//   }
// }

// console.log(ans);

// ****** First Part *******
