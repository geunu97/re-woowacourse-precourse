const Validator = {
  userNumbers(numbers) {
    if (!Number(numbers)) {
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
    if (numbers.includes('0')) {
      throw new Error('[ERROR] 0이 포함되어 있으면 안됩니다.');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 중복된 수가 존재하면 안됩니다.');
    }
    if (numbers.length !== 3) {
      throw new Error('[ERROR] 길이가 3이 아닙니다.');
    }
    return true;
  },

  finalCommand(command) {
    if (command !== '1' && command !== '2') {
      throw new Error('[ERROR] 1(재시작) 또는 2(종료)를 입력해야 합니다.');
    }
    return true;
  },
};

module.exports = Validator;
