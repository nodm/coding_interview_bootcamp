// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

    // ┌─────────┬────┬────┬────┬───┐
    // │ (index) │ 0  │ 1  │ 2  │ 3 │
    // ├─────────┼────┼────┼────┼───┤
    // │ 0       │ 1  │ 2  │ 3  │ 4 │
    // │ 1       │ 12 │ 13 │ 14 │ 5 │
    // │ 2       │ 11 │ 16 │ 15 │ 6 │
    // │ 3       │ 10 │ 9  │ 8  │ 7 │
    // └─────────┴────┴────┴────┴───┘


// function matrix(n) {
//   const a = Array.from(
//     { length: n },
//     () => Array.from({ length: n }, () => 0)
//   );

//   let v = 1;
//   let r = 0;

//   let moveX = 1;
//   let moveY = 0;

//   let x = 0;
//   let y = 0;

//   let dirChanged = false;

//   while(v <= n * n) {
//     if (!dirChanged) {
//       a[y][x] = v;
//       v += 1;  
//     }

//     dirChanged = true;

//     if (moveX !== 0) {      
//       const nextX = x + moveX;

//       if (nextX >= n - r) {
//         moveX = 0;
//         moveY = 1;
//       } else if(nextX < r) {
//         moveX = 0;
//         moveY = -1;
//       } else {
//         x = nextX;
//         dirChanged = false;
//       }
//     } else {
//       const nextY = y + moveY;
      
//       if (nextY >= n - r) {
//         moveX = -1;
//         moveY = 0;
//       } else if(nextY <= r) {
//         r += 1;
//         moveX = 1;
//         moveY = 0;
//       } else {
//         y = nextY;
//         dirChanged = false;
//       }
//     }
//   }

//   console.table(a);
//   return a;
// }

function matrix(n) {
  const m = Array.from(
    { length: n },
    () => Array.from({ length: n }, () => 0)
  );

  let startRow = 0;
  let endRow = n - 1;

  let startColumn = 0;
  let endColumn = n - 1;

  let counter = 1;

  while(startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i += 1) {
      m[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i += 1) {
      m[i][endColumn] = counter;
      counter += 1;
    }
    endColumn -= 1;

    for (let i = endColumn; i >= startColumn; i -= 1) {
      m[endRow][i] = counter;
      counter += 1;
    }
    endRow -= 1;

    for (let i = endRow; i >= startRow; i -= 1) {
      m[i][startColumn] = counter;
      counter += 1;
    }
    startColumn += 1;

    // console.table(m);
  }

  return m;
}

module.exports = matrix;
