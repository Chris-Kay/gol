"use strict";

module.exports = class HashSet {
  constructor() {
    this._items = {};
  }

  add(item) {
    this._items[item.hashCode()] = item;
  }

  addItems(items) {
    for (const item of items) {
      this.add(item);
    }
  }

  remove(item) {
    delete this._items[item.hashCode()];
  }

  asArray() {
    const array = [];

    for (const index in this._items) {
      array.push(this._items[index]);
    }

    return array;
  }

  size() {
    return Object.keys(this._items).length;
  }

  equals(otherHashSet) {
    return JSON.stringify(this) === JSON.stringify(otherHashSet);
  }

  contains(item) {
    return Boolean(this._items[item.hashCode()]);
  }
};
