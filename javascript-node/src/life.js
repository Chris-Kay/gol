var Life = function(initialLiveCells) {
	this._liveCells = initialLiveCells;

	this.getLiveCells = function() {
		return this._liveCells;
	};
	
	this.cellShouldSurvive = function(numNeighbours) {
		throw "Unsupported Operation Exception";
	};
};

module.exports = Life;