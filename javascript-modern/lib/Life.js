"use strict";

module.exports = class Life {
  constructor(initialLiveCells) {
    this._liveCells = initialLiveCells;
  }

  getLiveCells() {
    return this._liveCells;
  }

  cellShouldSurvive(numNeighbours) {
    throw new Error("Not yet implemented");
  }
};
