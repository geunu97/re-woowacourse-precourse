class PairMatchingResults {
  #results = [];
  #currentResult;

  isExistingResult(currentResults, currentLevel) {
    const levelResults = this.getLevelResults(currentLevel);
    let existence = false;
    levelResults.forEach((result) => {
      currentResults.forEach((currentResult) => {
        result.forEach(([crewA, crewB]) => {
          if (currentResult.includes(crewA) && currentResult.includes(crewB)) {
            existence = true;
          }
        });
      });
    });
    return existence;
  }

  getLevelResults(currentLevel) {
    const levelResults = [];
    this.#results.forEach(([level, ...result]) => {
      if (level === currentLevel) {
        levelResults.push(result);
      }
    });
    return levelResults;
  }

  getCurrentResult() {
    return this.#currentResult;
  }

  setCurrentResult(value) {
    this.#currentResult = value;
  }

  setResults(level) {
    this.#results.push([level, ...this.#currentResult]);
  }
}

module.exports = PairMatchingResults;
