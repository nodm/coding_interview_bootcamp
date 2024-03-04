// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * Solution #1
 */
function palindrome1(str) {
  const lastIndex = str.length - 1;

  for (let i = 0; i < Math.ceil(str.length / 2); i += 1) {
    if (str[i] !== str[lastIndex - i]) return false;
  }

  return true;
}

/**
 * Solution #2
 */
function palindrome2(str) {
  const reversedStr = str.split('').reverse().join('');

  return str === reversedStr;
}

/**
 * Solution #3
 * Not the best way as it iterates through all the elements
 */
function palindrome3(str) {
  return str.split('').every((character, i, arr) => character === arr[str.length - 1 - i]);
}

module.exports = palindrome2;
