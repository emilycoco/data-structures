var Queue = function() {
  this.storage = {};
  this.firstIndex = 0;
  this.lastIndex = 0;
};

Queue.prototype.enqueue = function(value){
    this.storage[this.lastIndex] = value;
    this.lastIndex++;
  };

Queue.prototype.dequeue = function(){
  if(this.storage[this.firstIndex] !== undefined){
    var returnValue = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    return returnValue;
  }
};

Queue.prototype.size = function(){
  return this.lastIndex - this.firstIndex;
};
