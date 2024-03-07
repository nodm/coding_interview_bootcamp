// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/**
 * Loop version
 */
// function fib(n) {
//   const f = [0, 1];
  
//   for (let i = 2; i <= n; i += 1) {
//      f.push(f[i - 1] + f[i - 2])
//   }

//   return f[n];
// }

/**
 * Recursion version
 */
// function fib(n) {
//   if (n < 2) return n;

//   return fib(n - 1) + fib(n - 2);
// }

function memoize(fn) {
  const cache = new Map();

  return function (n) {
    if (!cache.has(n)) {
      cache.set(n, fn(n));
    }

    return cache.get(n);
  };
}

/**
 * Memoized recursion version
 */
const fib = memoize((n) => {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
});

module.exports = fib;
