function problem3(number) {
  return getCount369(number);
}

const getCount369 = (number) => {
  let count = 0;
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    const matchNumber = String(currentNumber).match(/3|6|9/g);
    if (matchNumber) {
      count += matchNumber.length;
    }
  }
  return count;
};

module.exports = problem3;
