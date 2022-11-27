function problem4(word) {
  return replaceWord(word).join("");
}

const replaceWord = (word) => {
  return word.split("").map((value) => {
    if ("A" <= value && value <= "Z") {
      return String.fromCharCode(90 - (value.charCodeAt(0) - 65));
    }
    if ("a" <= value && value <= "z") {
      return String.fromCharCode(122 - (value.charCodeAt(0) - 97));
    }
    return value;
  });
};

module.exports = problem4;
