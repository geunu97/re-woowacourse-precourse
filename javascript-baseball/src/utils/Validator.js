const Validator = {
  isUserNumbers(numbers) {
    if (!Number(numbers)) {
      return false;
    }
    if (numbers.includes('0')) {
      return false;
    }
    if (new Set(numbers).size !== numbers.length) {
      return false;
    }
    if (numbers.length !== 3) {
      return false;
    }
    return true;
  },

  isFinalCommand(command) {
    if (command !== '1' && command !== '2') {
      return false;
    }
    return true;
  },
};

module.exports = Validator;
