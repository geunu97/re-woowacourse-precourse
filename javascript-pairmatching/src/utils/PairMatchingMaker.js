const PairMatchingMaker = {
  make(crew, generateShuffle) {
    const initNumbers = Array.from({ length: crew.length }).map((_, index) => index);
    const randomNumbers = generateShuffle(initNumbers);

    return randomNumbers.map((number) => crew[number]);
  },
};

module.exports = PairMatchingMaker;
