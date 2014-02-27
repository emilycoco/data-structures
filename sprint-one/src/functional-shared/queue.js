var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.firstIndex = 0;
  instance.lastIndex = 0;

  // Implement the methods below
  _.extend(instance,queueMethods);


  return instance;
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.lastIndex] = value;
    this.lastIndex++;
  },

  dequeue : function(){
    if(this.storage[this.firstIndex] !== undefined){
      var returnValue = this.storage[this.firstIndex];
      delete this.storage[this.firstIndex];
      this.firstIndex++;
      return returnValue;
    }
  },

  size : function(){
    return this.lastIndex - this.firstIndex;
  }
};

