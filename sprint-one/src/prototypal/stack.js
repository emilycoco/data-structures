



var makeStack = function(){
  var instance = Object.create(makeStack.stuff);

  instance.storage = {};
  instance.quant = 0;

  return instance;
};

makeStack.stuff = {};


  makeStack.stuff.push = function(value){
    this.storage[this.quant++] = value;
  };

  makeStack.stuff.pop = function(){
    if (this.quant > 0) {
      var returnValue = this.storage[this.quant - 1];
      delete this.storage[this.quant - 1];
      this.quant--;
      return returnValue;
    }
  };

  makeStack.stuff.size = function(){
    return this.quant;
  };



