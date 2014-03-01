var HashTable = function(){
  this._limit = 8;
  this._items = 0;
  this._storage = makeLimitedArray(this._limit);
  console.log("storage: ", this._storage);
  console.log(this._storage.each(function(value, key){
    this._storage.get(key);
  })
  );
};

HashTable.prototype.resize = function() {
  if (this._items > (0.75 * this._limit)) {
    this._limit *= 2;
    //this.rehash(this._storage);
  }
  if (this._items < 0.25 * this._limit) {
    this._limit *= 0.5;
    //this.rehash(this._storage);
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, v);
  this._items ++;
  this.resize();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    console.log(this._storage.get(i));
    return this._storage.get(i);
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = null;
  if (this._items !== 0) {
    this._items --;
  }
  this.resize();
};

/*HashTable.prototype.rehash = function(storageSet){
  var tempStorage = storageSet['3'].slice(0);
  //this._items = 0;
  this._storage['3'] = [];
  for(var i = 0; i < tempStorage.length; i++){
    this.insert(tempStorage[i][0], tempStorage[i][1]);
  }
  console.log(this._items, this._limit);
};*/
