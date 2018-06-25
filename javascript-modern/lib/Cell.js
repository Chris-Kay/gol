"use strict";

module.exports = class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  hashCode() {
    return 31 * 31 * this.x + 31 * this.y;
  }

  equals(otherCell) {
    return otherCell.x === this.x && otherCell.y === this.y;
  }
};
