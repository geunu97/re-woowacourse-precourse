class TargetModel {
  #model;

  constructor(pairMatchingModels) {
    this.pairMatchingModels = pairMatchingModels;
  }

  setModel(course, level, mission) {
    this.#model = this.pairMatchingModels.getTargetModel(course, level, mission);
  }

  getModel() {
    return this.#model;
  }
}

module.exports = TargetModel;
