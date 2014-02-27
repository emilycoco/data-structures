var Stack = function() {
  this.storage = {};
  this.quant = 0;
};

  Stack.prototype.push = function(value){
      this.storage[this.quant++] = value;
  };

  Stack.prototype.pop = function(){
    if (this.quant > 0) {
      var returnValue = this.storage[this.quant - 1];
      delete this.storage[this.quant - 1];
      this.quant--;
      return returnValue;
    }
  };

  Stack.prototype.size = function(){
    return this.quant;
  };
