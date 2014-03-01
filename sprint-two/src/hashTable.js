var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  for(var i = 0; i < this._limit; i++){
    this._storage.set(i,[]);
  }
  this._storage.printer();
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k){
};

