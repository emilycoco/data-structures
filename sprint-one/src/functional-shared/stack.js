// Create an object that holds the methods that will be shared by all instances of the class.
// You'll need to use the keyword this in your methods.
// Use _.extend to copy the methods onto the instance.



var makeStack = function(){
  var instance = {};

  instance.storage = {};
  instance.quant = 0;
  // Use an object with numeric keys to store values
  // Hint: set an initial value here
  _.extend(instance, stackMethods);

  // Implement the methods below


  return instance;
};

var stackMethods = {
  push : function(value){
    this.storage[this.quant++] = value;
  },

  pop : function(){
    if (this.quant > 0) {
      var returnValue = this.storage[this.quant - 1];
      delete this.storage[this.quant - 1];
      this.quant--;
      return returnValue;
    }
  },

  size : function(){
    return this.quant;
  }
};

// var myS = makeStack();
// myS.push(5);
