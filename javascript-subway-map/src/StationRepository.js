class StationRepository {
  #stations = [];

  addStation(station) {
    this.#stations.push(station);
  }

  deleteStation(name) {
    return this.#stations.filter((station) => station !== name);
  }
}

module.exports = StationRepository;
