class PairMatchingModels {
  #pairMatchingModels = [];

  setPairMatchingModels(pairMatchingModel) {
    this.#pairMatchingModels.push(pairMatchingModel);
  }

  getPairMatchingModel(course, level, mission) {
    let targetPairMatchingModel;
    this.#pairMatchingModels.forEach((pairMatchingModel) => {
      if (
        pairMatchingModel.getCourse() === course &&
        pairMatchingModel.getLevel() === level &&
        pairMatchingModel.getMission() === mission
      ) {
        targetPairMatchingModel = pairMatchingModel;
      }
    });
    return targetPairMatchingModel;
  }
}

module.exports = PairMatchingModels;
