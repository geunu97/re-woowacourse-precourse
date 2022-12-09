class PairMatchingModels {
  #pairMatchingModels = [];

  setPairMatchingModels(pairMatchingModel) {
    this.#pairMatchingModels.push(pairMatchingModel);
  }

  getPairMatchingResult(course, level, mission, callback) {
    this.#pairMatchingModels.forEach((pairMatchingModel) => {
      if (pairMatchingModel.getCourse() !== course) {
        return;
      }
      if (pairMatchingModel.getLevel() !== level) {
        return;
      }
      if (pairMatchingModel.getMission() !== mission) {
        return;
      }
      pairMatchingModel.getPairMatchingResult(callback);
    });
  }
}

module.exports = PairMatchingModels;
