function problem1(pobi, crong) {
  if (isValidatePage(pobi) && isValidatePage(crong)) {
    return getGameResult(getLargestNumber(pobi), getLargestNumber(crong));
  }
  return -1;
}

const getGameResult = (pobiLargestNumber, crongLargestNumber) => {
  if (pobiLargestNumber === crongLargestNumber) {
    return 0;
  }
  if (pobiLargestNumber > crongLargestNumber) {
    return 1;
  }
  if (pobiLargestNumber < crongLargestNumber) {
    return 2;
  }
};

const getLargestNumber = (pages) => {
  const result = [];
  pages.forEach((page) => {
    result.push(getSumPage(page), getMulPage(page));
  });

  return Math.max(...result);
};

const getSumPage = (page) => {
  return String(page)
    .split("")
    .reduce((acc, currentValue) => {
      return acc + Number(currentValue);
    }, 0);
};

const getMulPage = (page) => {
  return String(page)
    .split("")
    .reduce((acc, currentValue) => {
      return acc * Number(currentValue);
    }, 1);
};

const isValidatePage = ([leftPage, rightPage]) => {
  if (!Number(leftPage) || !Number(rightPage)) {
    return false;
  }
  if (Number(leftPage) % 2 !== 1 || Number(rightPage) % 2 !== 0) {
    return false;
  }
  if (Number(leftPage) + 1 !== Number(rightPage)) {
    return false;
  }
  if (Number(leftPage) < 1 || Number(rightPage) > 400) {
    return false;
  }
  return true;
};

module.exports = problem1;
