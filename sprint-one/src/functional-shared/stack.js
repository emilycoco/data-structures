// Create an object that holds the methods that will be shared by all instances of the class.
// You'll need to use the keyword this in your methods.
// Use _.extend to copy the methods onto the instance.

var stackMethods = {
  push : function(value){

    this.storage[this.size++] = value;
  },

  pop : function(){
    if (this.size > 0) {
      var returnValue = this.storage[this.size - 1];
      delete this.storage[this.size - 1];
      this.size--;
      return returnValue;
    }
  },

  size : function(){
    return this.size;
  }
};


var makeStack = function(){
  var instance = {};

  instance.storage = {};
  instance.size = 0;
  // Use an object with numeric keys to store values
  // Hint: set an initial value here
  _.extend(instance, stackMethods);

  // Implement the methods below


  return instance;
};

// var myS = makeStack();
// myS.push(5);
