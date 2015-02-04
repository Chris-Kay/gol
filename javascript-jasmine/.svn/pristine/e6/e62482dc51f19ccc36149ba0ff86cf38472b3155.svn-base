/**
 * A hashed set of objects.
 */
 var HashSet = function() {
	
	this.init = function() {
		this._items = Object.create(null);
	}

	/**
	 * Add a single item to the set. Expects the item to have a hashCode() method.
	 */
	this.add = function(item) {
		this._items[item.hashCode()] = item;
	}
	
	/**
	 * Add an array of items to the set. Expects each item to have a hashCode() method.
	 */
	this.addItems = function(items) {
		for(var i=0; i<items.length; i++) {
			var item = items[i];
			this.add(item);
		}
	}
	
	/**
	 * Remove a single item from the set, using its hashCode() method as a reference.
	 */
	this.remove = function(item) {
		delete this._items[item.hashCode()];
	}
	
	/**
	 * Return a list of items as an array.
	 */
	this.asArray = function() {
		var array = [];
		for(var index in this._items) {
			var item = this._items[index];
			array.push(item);
		}
		return array;
	}
	
	/**
	 * The number of items in the set.
	 */
	this.size = function() {
		var count = 0;
		for(var item in this._items) {
			count++;
		}
		return count;
	}
	
	/**
	 * Test equality of two hash sets.
	 */
	this.equals = function(otherHashSet) {
		return JSON.stringify(this) === JSON.stringify(otherHashSet);
	}

	/**
	 * Test if an element is contained within the set, using the hashCode() to determine this.
	 */
	this.contains = function(item) {
		return undefined !== this._items[item.hashCode()];
	}
	
	this.init.apply(this, arguments);
};
