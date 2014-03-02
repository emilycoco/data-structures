var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};


// this is the one that caused the infinite loop:
// change if bucket[h] to bucket [h][0] to stop infinite loop
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for (var h = 0; h < bucket.length; h++) {
    var pair = bucket[h];
    if (pair[0] === k) {
      pair[1] = v;
      return;
    }
  }
  bucket.push([k,v]);
  this._storage.set(i, bucket);
  this._count++;
  if (this._count > 0.75 * this._limit) {
    this.rehash(2 * this._limit);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for (var h = 0; h < bucket.length; h++) {
    var pair = bucket[h];
    if (pair[0] === k) {
      return pair[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for (var h = 0; h < bucket.length; h++) {
    var pair = bucket[h];
    if (pair[0] === k) {
      bucket.splice(pair, 1);
      this._count--;
      if (this._count > 0.25 * this._limit) {
        this.rehash(0.5 * this._limit);
      }
    }
    return pair[1];
  }
  return null;
};

HashTable.prototype.rehash = function(newLimit) {
  var oldHash = this._storage;
  this._limit = newLimit;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
  var newHash = this;
  console.log(oldHash);
  oldHash.each(function(bucket) {
    for(var j = 0; j < bucket.length; j++) {
      if (!bucket) {
        return;
      } else {
        newHash.insert(bucket[j][0],bucket[j][1]);
      }
    }
  });
};

