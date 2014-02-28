var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode =  makeNode(value);
    if(list.tail === null){
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };


  list.removeHead = function(){
    if(list.head !== null){
      var headValue = list.head.value;
      if(list.head.next === null){
        delete list.head;
        list.head = null;
        list.tail = null;
      }
      var newHead = list.head.next;
      delete list.head;
      list.head = newHead;
      return headValue;
    }
  };

  list.contains = function(target, node){
    var start = node || list.head;
    while (target !== start.value) {
      if (start.next === null) {
        return false;
      }
      start = start.next;
    }
    return true;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
