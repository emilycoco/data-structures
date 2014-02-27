var makeStack = function(){
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.quant = 0;

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


