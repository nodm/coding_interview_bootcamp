// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
// (n - 1) * 2 + 1 
// function pyramid(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(
//       ' '.repeat(n - 1 - i) + '#'.repeat(1 + 2 * i) + ' '.repeat(n - 1 - i)
//     );
//   }
// }

function pyramid(n, row = 0, line = '') {
  if (row === n) {
    return;
  }

  const lineLength = 2 * n - 1; // 2 * (n - 1) + 1

  if (line.length === lineLength) {
    console.log(line);
    return pyramid(n, row + 1);
  }

  // n - 1  + row < line.length < n - 1 - row
  const symbol = Math.abs(line.length - n + 1) > row ? ' ' : '#';

  pyramid(n, row, line.concat(symbol));
}

module.exports = pyramid;
