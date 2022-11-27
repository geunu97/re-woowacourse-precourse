function problem2(cryptogram) {
  return removeDuplicatedWord(cryptogram);
}

const removeDuplicatedWord = (cryptogram) => {
  const stack = [];
  cryptogram.split("").forEach((word) => {
    if (stack.length === 0) {
      stack.push(word);
      return;
    }
    if (stack[stack.length - 1] === word) {
      stack.pop();
      return;
    }
    stack.push(word);
  });
  return stack.join("");
};

module.exports = problem2;
