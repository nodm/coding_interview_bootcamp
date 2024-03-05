// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const stringAMap = new Map();
//   stringA
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .forEach((character) => {
//       stringAMap.set(character, (stringAMap.get(character) ?? 0) + 1);
//     });

//   for (let character of stringB.replace(/[^\w]/g, '').toLowerCase().split('')) {
//     if (!stringAMap.has(character)) return false;

//     const cnt = stringAMap.get(character);
//     if (cnt === 1) {
//       stringAMap.delete(character);
//     } else {
//       stringAMap.set(character, cnt - 1);
//     }  
//   }

//   return stringAMap.size === 0;
// }

function normalizeString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}
function anagrams(stringA, stringB) {
  return normalizeString(stringA) === normalizeString(stringB);
}

module.exports = anagrams;
