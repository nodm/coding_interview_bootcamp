// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charUsage = new Map();
  let maxUsageChar;
  let maxUsageCount = 0;

  str.split('').forEach(character => {
    const count = (charUsage.get(character) ?? 0) + 1;
    charUsage.set(character, count);

    if (count > maxUsageCount) {
      maxUsageChar = character;
      maxUsageCount = count;
    }
  });

  return maxUsageChar;
}

module.exports = maxChar;
