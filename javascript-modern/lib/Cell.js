"use strict";

module.exports = class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  hashCode() {
    // JAVA !!!
    /*
    The value 31 was chosen because it is an odd prime. 
    If it were even and the multiplication overflowed, information would be lost, as multiplication by 2 is equivalent to shifting. 
    The advantage of using a prime is less clear, but it is traditional.
     A nice property of 31 is that the multiplication can be replaced by a shift and a subtraction for better performance: 31 * i == (i << 5) - i. 
     Modern VMs do this sort of optimization automatically.
    */
    return 31 * 31 * this.x + 31 * this.y;
  }

  equals(otherCell) {
    return otherCell.x === this.x && otherCell.y === this.y;
  }
};
