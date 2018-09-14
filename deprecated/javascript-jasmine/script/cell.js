/**
 * A single cell in Conway's Game of Life.
 */
 var Cell = function() {
	
	this.init = function(x, y) {
		this.x = x;
		this.y = y;		
	}

	this.hashCode = function() {
		return 31 * 31 * this.x + 31 * this.y;
	}
	
	this.equals = function(otherCell) {
		return otherCell.x === this.x && otherCell.y === this.y; 
	}
	
	this.init.apply(this, arguments);
};