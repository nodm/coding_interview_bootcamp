// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let i = 1; i <= n; i += 1) {
//     console.log('#'.repeat(i).concat(' '.repeat(n - i)));
//   }
// }

// function steps(n, depth = n) {

//   if (n === 0) return;

//   steps(n - 1, depth);

//   console.log(
//     '#'
//       .repeat(n)
//       .concat(' '.repeat(depth - n))
//   );
// }

function steps(n, row = 0, stair = '') {
  if (row === n) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  stair += stair.length > row ? ' ' : '#';
  steps(n, row, stair);
}

module.exports = steps;
