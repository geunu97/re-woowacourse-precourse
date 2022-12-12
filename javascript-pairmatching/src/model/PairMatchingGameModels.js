class PairMatchingGameModels {
  #models = [];

  setModels(model) {
    this.#models.push(model);
  }

  getTargetModel(course, level, mission) {
    let targetModel;
    this.#models.forEach((model) => {
      if (model.getCourse() === course && model.getLevel() === level && model.getMission() === mission) {
        targetModel = model;
      }
    });
    return targetModel;
  }

  delete() {
    this.#models = [];
  }
}

module.exports = PairMatchingGameModels;
