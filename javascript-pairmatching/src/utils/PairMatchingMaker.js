const PairMatchingMaker = {
  make(crew, generateShuffle) {
    const initNumbers = Array.from({ length: crew.length }).map((_, index) => index);
    const randomNumbers = generateShuffle(initNumbers);
    const randomCrew = [];

    randomNumbers
      .map((number) => crew[number])
      .forEach((currentCrew, index, array) => {
        if (index % 2 === 0) {
          randomCrew.push([currentCrew, array[index + 1]]);
        }
      });

    return randomCrew;
  },
};

module.exports = PairMatchingMaker;
