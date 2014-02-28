var HashTable = function(){
  this._limit = 8;
  this._items = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.resize = function() {
  if (this._items > (0.75 * this._limit)) {
    this._limit *= 2;
  }
  if (this._items < 0.25 * this._limit) {
    this._limit *= 0.5;
  }
}

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = v;
  this._items ++;
  // this.resize();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = null;
  if (this._items !== 0) {
    this._items --;
  }
  // this.resize();
};

