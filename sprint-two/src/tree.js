var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === undefined){
    this.children = [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  } else {
    if(this.children){
      for (var i = 0; i < this.children.length; i++) {
        if(this.children[i].contains(target)){
          return true;
        }
      }
    }
  }
  return false;
};

