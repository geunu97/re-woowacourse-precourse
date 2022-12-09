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
}

module.exports = PairMatchingModels;
