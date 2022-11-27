function problem6(forms) {
  if (isValidateForms(forms)) {
    const duplicatedWordUserEmails = getDuplicatedWordUserEmails(
      setDividedWords(forms, new Map())
    );
    return sortArray(duplicatedWordUserEmails);
  }
  return -1;
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

const isValidateForms = (forms) => {
  if (forms.length < 1 || forms.length > 10000) {
    return false;
  }
  for (let index = 0; index < forms.length; index += 1) {
    const [email, nickName] = forms[index];
    if (!isValidateEmail(email)) {
      return false;
    }
    if (!isValidateNickName(nickName)) {
      return false;
    }
  }
  return true;
};

const isValidateEmail = (email) => {
  if (email.length < 11 || email.length > 19) {
    return false;
  }
  if (
    !(email.includes("@email.com") && email.match(/@email.com/g).length === 1)
  ) {
    return false;
  }
  return true;
};

const isValidateNickName = (nickName) => {
  if (nickName.length < 1 || nickName.length > 19) {
    return false;
  }
  if (!/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(nickName)) {
    return false;
  }
  return true;
};

module.exports = problem6;
