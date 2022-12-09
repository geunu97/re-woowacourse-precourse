class PairMatchingModels {
  #pairMatchingModels = [];

  setPairMatchingModels(pairMatchingModel) {
    this.#pairMatchingModels.push(pairMatchingModel);
  }

  isExistingPairMatchingModel(course, level, mission) {
    let existence = false;
    this.#pairMatchingModels.forEach((pairMatchingModel) => {
      if (
        pairMatchingModel.getCourse() === course &&
        pairMatchingModel.getLevel() === level &&
        pairMatchingModel.getMission() === mission
      ) {
        existence = true;
      }
    });
    return existence;
  }

  getPairMatchingResult(pairMatchingModel, callback) {
    pairMatchingModel.generatePairMatchingResult(callback);
  }
}

module.exports = PairMatchingModels;
