/**
 * Life in Conway's Game of Life.
 */
 var Life = function() {
	
	this.init = function(initialLiveCells /* HashSet<Cell> */) {
		this._liveCells = initialLiveCells;
	}

	this.getLiveCells = function() {
		return this._liveCells;
	}
	
	this.cellShouldSurvive = function(numNeighbours /* int */) {

		throw "Unsupported Operation Exception";
	}
	
	this.init.apply(this, arguments);
};
