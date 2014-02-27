var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstIndex = 0;
  var lastIndex = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[lastIndex] = value;
    lastIndex++;
  };

  instance.dequeue = function(){
    if(storage[firstIndex] !== undefined){
      var returnValue = storage[firstIndex];
      delete storage[firstIndex];
      firstIndex++;
      return returnValue;
    }
  };

  instance.size = function(){
    return lastIndex - firstIndex;
  };

  return instance;
};

var queueMethods = {};
