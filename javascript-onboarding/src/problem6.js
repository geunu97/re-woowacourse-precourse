function problem6(forms) {
  const duplicatedWordUserEmails = getDuplicatedWordUserEmails(
    setDividedWords(forms, new Map())
  );
  return sortArray(duplicatedWordUserEmails);
}

const sortArray = (array) => {
  return array.sort();
};

const removeDuplicatedValue = (array) => {
  return Array.from(new Set(array));
};

const getDuplicatedWordUserEmails = (dividedWords) => {
  const userEmails = [];
  dividedWords.forEach((emails) => {
    if (emails.length >= 2) {
      userEmails.push(...emails);
    }
  });
  return removeDuplicatedValue(userEmails);
};

const setDividedWords = (forms, dividedWords) => {
  forms.forEach(([email, nickName]) => {
    for (let index = 0; index <= nickName.length - 2; index += 1) {
      const dividedNickName = nickName.slice(index, index + 2);
      if (dividedWords.has(dividedNickName)) {
        const setEmails = [...dividedWords.get(dividedNickName), email];
        dividedWords.set(dividedNickName, removeDuplicatedValue(setEmails));
        continue;
      }
      dividedWords.set(dividedNickName, [email]);
    }
  });
  return dividedWords;
};

module.exports = problem6;
